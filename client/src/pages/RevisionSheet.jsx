import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Repeat, Map, LineChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import mermaid from 'mermaid';
import api from '../api/axiosConfig';
import { useAuthStore } from '../store/useAuthStore';

const RevisionSheet = () => {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(false);
  const [topicInput, setTopicInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const user = useAuthStore((state) => state.user);
  const targetExam = user?.academicProfile?.targetExam?.toLowerCase() || '';
  
  // Generic Fallback
  let defaultTopic = `${user?.academicProfile?.targetExam || 'Core'} Fundamentals`;
  let defaultSyntax = `graph TD\n  A[${user?.academicProfile?.targetExam || 'Concept'}] --> B(Key Principle 1)\n  A --> C(Key Principle 2)\n  B --> D[Application 1]\n  C --> E[Application 2]`;
  let defaultQ = `What is the most critical concept to remember about ${user?.academicProfile?.targetExam || 'this topic'}?`;
  let defaultA = 'Understanding the core foundational principles and how they connect.';

  if (targetExam.includes('jee')) {
    defaultTopic = 'Newton\'s Laws of Motion';
    defaultSyntax = `graph TD\n  A[Newton's Laws] --> B(First Law: Inertia)\n  A --> C(Second Law: F=ma)\n  A --> D(Third Law: Action/Reaction)`;
    defaultQ = 'What does Newton\'s Second Law state?';
    defaultA = 'Force equals mass times acceleration (F=ma).';
  } else if (targetExam.includes('upsc')) {
    defaultTopic = 'French Revolution';
    defaultSyntax = `graph TD\n  A[French Revolution] --> B(Economic Crisis)\n  A --> C(Social Inequality)\n  B --> E[High Taxes]\n  C --> G[The Three Estates]`;
    defaultQ = 'What were the "Three Estates" in pre-revolutionary France?';
    defaultA = '1st: Clergy, 2nd: Nobility, 3rd: Commoners';
  } else if (targetExam.includes('neet')) {
    defaultTopic = 'Photosynthesis';
    defaultSyntax = `graph TD\n  A[Photosynthesis] --> B(Light Reactions)\n  A --> C(Calvin Cycle)\n  B --> D[ATP & NADPH]\n  C --> E[Glucose]`;
    defaultQ = 'What are the two main stages of Photosynthesis?';
    defaultA = 'Light-dependent reactions and the Calvin cycle (light-independent reactions).';
  } else if (targetExam.includes('ca') || targetExam.includes('chartered')) {
    defaultTopic = 'Double Entry Accounting';
    defaultSyntax = `graph TD\n  A[Double Entry System] --> B(Debit)\n  A --> C(Credit)\n  B --> D[Assets & Expenses]\n  C --> E[Liabilities & Income]`;
    defaultQ = 'What is the fundamental accounting equation?';
    defaultA = 'Assets = Liabilities + Equity';
  }

  const [sheetData, setSheetData] = useState({
    topic: defaultTopic,
    mermaidSyntax: defaultSyntax,
    flashcard: {
      question: defaultQ,
      answer: defaultA
    }
  });

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true, theme: 'default' });
    mermaid.contentLoaded();
  }, [sheetData.mermaidSyntax]);

  const handleGenerate = async () => {
    if(!topicInput.trim()) return;
    setIsGenerating(true);
    try {
      const res = await api.post('/ai/revision', { topic: topicInput });
      setSheetData({
        topic: topicInput,
        mermaidSyntax: res.data.mermaid_diagram_syntax,
        flashcard: res.data.flashcard
      });
      setTopicInput('');
      setFlipped(false);
    } catch(err) {
      console.error(err);
      alert('Failed to generate sheet');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-8 h-full">
      <header className="flex items-center gap-4 mb-8">
        <button onClick={() => navigate('/')} className="text-gray-400 hover:text-slate-800 transition">
          <ArrowLeft />
        </button>
        <h1 className="text-3xl font-bold text-slate-800">Visual Revision Sheet</h1>
        <span className="bg-neonCyan/20 text-indigo-600 px-4 py-1 rounded-full text-sm border border-neonCyan/30">
          {sheetData.topic}
        </span>
      </header>

      <div className="mb-8 flex gap-4 max-w-xl">
        <input 
          type="text" 
          placeholder="Enter a new topic to generate (e.g., Photosynthesis)"
          value={topicInput}
          onChange={e => setTopicInput(e.target.value)}
          className="flex-1 bg-white border border-indigo-200 rounded-lg px-4 py-2 text-slate-800 focus:border-neonCyan focus:outline-none"
        />
        <button 
          onClick={handleGenerate} 
          disabled={isGenerating}
          className="bg-neonTeal text-dark px-4 py-2 rounded-lg font-bold hover:bg-neonCyan transition disabled:opacity-50"
        >
          {isGenerating ? 'Generating...' : 'Generate Magic Sheet'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Mermaid Mind Map Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl border border-indigo-200 shadow-xl"
        >
          <h3 className="text-slate-800 font-semibold flex items-center gap-2 mb-4">
            <Map className="text-indigo-500 w-5 h-5"/> Concept Mind Map
          </h3>
          <div className="bg-slate-50 p-4 rounded-lg overflow-x-auto shadow-inner min-h-[300px] flex items-center justify-center">
            {isGenerating ? (
              <div className="text-indigo-600 animate-pulse">Drawing neural pathways...</div>
            ) : (
              <div className="mermaid text-center" key={sheetData.mermaidSyntax}>
                {sheetData.mermaidSyntax}
              </div>
            )}
          </div>
        </motion.div>

        {/* Interactive Flashcard */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-xl border border-indigo-200 shadow-xl flex flex-col"
        >
          <h3 className="text-slate-800 font-semibold flex items-center gap-2 mb-4">
            <Repeat className="text-orange-500 w-5 h-5"/> Active Recall Flashcard
          </h3>
          
          <div 
            className="relative w-full flex-1 min-h-[300px] cursor-pointer"
            onClick={() => setFlipped(!flipped)}
            style={{ perspective: '1000px' }}
          >
            <motion.div 
              className="w-full h-full absolute inset-0 preserve-3d"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="absolute inset-0 w-full h-full bg-slate-50 border-2 border-neonTeal/30 rounded-xl flex items-center justify-center p-8 text-center backface-hidden shadow-[0_0_20px_rgba(69,162,158,0.1)]"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <h2 className="text-2xl text-slate-800 font-semibold">{sheetData?.flashcard?.question || "Question not available."}</h2>
              </div>

              <div 
                className="absolute inset-0 w-full h-full bg-neonTeal/10 border-2 border-neonTeal rounded-xl flex items-center justify-center p-8 text-center backface-hidden shadow-[0_0_30px_rgba(69,162,158,0.3)]"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="text-slate-800 text-lg">
                  <p>{sheetData?.flashcard?.answer || "Please try regenerating the sheet."}</p>
                </div>
              </div>
            </motion.div>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">Click the card to flip</p>
        </motion.div>

      </div>
    </div>
  );
};

export default RevisionSheet;
