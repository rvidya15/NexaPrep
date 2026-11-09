import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Brain, Flame, Calendar, FileText, Sparkles, 
  CheckCircle2, ArrowRight, Zap, BarChart3, Clock, BookOpen, 
  Layers, Volume2, Play, ChevronRight, GraduationCap, 
  TrendingUp, Coins, Paperclip, UploadCloud, Target, ShieldCheck,
  Check, ExternalLink, MessageSquare, Headphones
} from 'lucide-react';

const YoutubeIcon = ({ className = "w-5 h-5 text-red-600" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const Landing = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('jee');

  // Interactive mock preview data for different exam presets
  const examDemos = {
    jee: {
      exam: 'JEE Advanced',
      streak: 18,
      freezes: 2,
      completion: 78,
      tokens: 95,
      aiPick: {
        subject: 'Physics',
        title: 'Rotational Dynamics & Inertia',
        desc: 'Based on your recent quiz, accuracy on torque calculations is 48%. Focus here for rapid score improvement.',
      },
      subjects: [
        { name: 'Physics', chapters: '14/18 Chapters', progress: 78, color: 'from-blue-500 to-indigo-600', ytTitle: 'Physics Galaxy Full Course' },
        { name: 'Chemistry (Organic & Physical)', chapters: '16/20 Chapters', progress: 80, color: 'from-emerald-500 to-teal-600', ytTitle: 'Pankaj Sir Chemistry One-Shot' },
        { name: 'Mathematics (Calculus & Vectors)', chapters: '11/16 Chapters', progress: 69, color: 'from-purple-500 to-pink-600', ytTitle: 'Mohit Tyagi Calculus Series' },
      ],
      pdfDoc: 'Irodov_Rotational_Mechanics_Notes.pdf'
    },
    neet: {
      exam: 'NEET UG',
      streak: 24,
      freezes: 3,
      completion: 84,
      tokens: 120,
      aiPick: {
        subject: 'Biology',
        title: 'Human Physiology & Cardiac Cycle',
        desc: 'High-yield area with 8-10 recurring questions in last 5 years. Active recall recommended today.',
      },
      subjects: [
        { name: 'Zoology & Botany', chapters: '32/38 Chapters', progress: 84, color: 'from-emerald-500 to-teal-600', ytTitle: 'Tarun Sir Biology Master Playlist' },
        { name: 'Physics (Mechanics & Optics)', chapters: '19/26 Chapters', progress: 73, color: 'from-blue-500 to-indigo-600', ytTitle: 'Alakh Pandey NEET Physics One-Shot' },
        { name: 'Chemistry (NCERT Line-by-Line)', chapters: '24/30 Chapters', progress: 80, color: 'from-amber-500 to-orange-600', ytTitle: 'NCERT Line-by-Line Chemistry' },
      ],
      pdfDoc: 'NCERT_Human_Physiology_Unit5.pdf'
    },
    upsc: {
      exam: 'UPSC CSE (Prelims + Mains)',
      streak: 31,
      freezes: 1,
      completion: 71,
      tokens: 140,
      aiPick: {
        subject: 'Polity & Governance',
        title: 'Fundamental Rights vs DPSP (Articles 14-32)',
        desc: 'Consistently tested topic. Practice interlinking Constitutional amendments with recent Supreme Court judgments.',
      },
      subjects: [
        { name: 'Indian Polity (Laxmikanth)', chapters: '54/76 Chapters', progress: 71, color: 'from-indigo-500 to-blue-600', ytTitle: 'Siddharth Arora Polity Masterclass' },
        { name: 'Modern Indian History', chapters: '28/34 Chapters', progress: 82, color: 'from-amber-500 to-red-600', ytTitle: 'Spectrum History Complete Playlist' },
        { name: 'Economy & Current Affairs', chapters: '22/32 Chapters', progress: 68, color: 'from-teal-500 to-emerald-600', ytTitle: 'Mrunal Patel Economy Sessions' },
      ],
      pdfDoc: 'Laxmikanth_Polity_Summary_Notes.pdf'
    }
  };

  const currentDemo = examDemos[activeTab];

  // Feature arsenal list
  const primaryFeatures = [
    {
      icon: <BarChart3 className="w-7 h-7 text-emerald-600" />,
      badge: "Consistency Tracking",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      title: "GitHub-Style Study Heatmap",
      desc: "Track daily study consistency across a responsive 52-week activity grid. Visual green contribution squares keep you accountable and eliminate procrastination.",
      metric: "52 Weeks Visualized"
    },
    {
      icon: <Layers className="w-7 h-7 text-indigo-600" />,
      badge: "Curriculum Intelligence",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      title: "Split-Up Master Syllabus & Completion %",
      desc: "Hierarchically breaks down complex exam syllabuses into modular Subjects, Chapters, and Topics with dynamic real-time completion percentage tracking.",
      metric: "100% Topic Mastery"
    },
    {
      icon: <YoutubeIcon className="w-7 h-7 text-red-600" />,
      badge: "Zero-Distraction Video",
      badgeColor: "bg-red-50 text-red-700 border-red-200",
      title: "Curated YouTube Course Playlists",
      desc: "Direct integration with verified one-shot marathons and full-length course playlists mapped to each syllabus topic. Never waste time searching YouTube again.",
      metric: "Hand-Picked Lectures"
    },
    {
      icon: <FileText className="w-7 h-7 text-blue-600" />,
      badge: "RAG Pipeline",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      title: "'Chat with your PDF' Document AI",
      desc: "Upload textbooks, past papers, or coaching class notes via Multer. The AI ingests the text and answers hyper-specific questions grounded purely in your materials.",
      metric: "Document Context Ingestion"
    },
    {
      icon: <Volume2 className="w-7 h-7 text-purple-600" />,
      badge: "Web Speech API",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      title: "Socratic AI Voice Tutor",
      desc: "A floating vocal mentor that reads explanations aloud and guides you to solutions step-by-step using the Socratic method, featuring audio-unlock protection.",
      metric: "Hands-Free Learning"
    },
    {
      icon: <Flame className="w-7 h-7 text-orange-600" />,
      badge: "Gamification",
      badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
      title: "Streak Maintenance & Freeze Tokens",
      desc: "Stay disciplined with automated daily streak logging, XP level progression, and freeze protection tokens so unexpected busy days don't break your momentum.",
      metric: "Daily Habit Engine"
    },
    {
      icon: <Sparkles className="w-7 h-7 text-pink-600" />,
      badge: "Mermaid.js Flowcharts",
      badgeColor: "bg-pink-50 text-pink-700 border-pink-200",
      title: "Magic Revision Sheets & PDF Export",
      desc: "Generate conceptual mind-maps and high-yield summary flowcharts for any topic in seconds. Export immediately to high-res printable PDF with one click.",
      metric: "One-Click PDF Export"
    },
    {
      icon: <Brain className="w-7 h-7 text-amber-600" />,
      badge: "Spaced Repetition (SM-2)",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      title: "Active Recall 3D Flashcards",
      desc: "Tinder-style swipeable 3D cards driven by the SuperMemo-2 memory consolidation algorithm to ensure you retain facts 4x longer for exam day.",
      metric: "SuperMemo-2 Algorithm"
    },
    {
      icon: <Coins className="w-7 h-7 text-cyan-600" />,
      badge: "Credit Architecture",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
      title: "Smart Token Economy & Stripe Ready",
      desc: "Fair, dynamic credit middleware: Revision Sheets (3 tokens), Chat (1 token), and Syllabus browsing (Free). Seamlessly integrated with Stripe checkout.",
      metric: "Monetized Architecture"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Top Notification Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white text-xs md:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="bg-indigo-500/30 px-2 py-0.5 rounded-full text-indigo-200 text-xs font-bold border border-indigo-400/30">v2.0 Released</span>
        <span>Includes RAG PDF Chat, YouTube Course Playlists & GitHub-Style Heatmaps!</span>
        <button onClick={() => navigate('/register')} className="underline font-bold hover:text-indigo-200 ml-1">Try It Free &rarr;</button>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="bg-gradient-to-br from-[#5a4bda] to-indigo-600 rounded-xl p-2.5 shadow-md shadow-indigo-500/20">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-slate-900 block leading-tight">NexaPrep <span className="text-[#5a4bda]">AI</span></span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Next-Gen Study OS</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#demo" className="hover:text-indigo-600 transition-colors">Interactive Demo</a>
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#syllabus" className="hover:text-indigo-600 transition-colors">Syllabus & YouTube</a>
            <a href="#rag" className="hover:text-indigo-600 transition-colors">RAG Document AI</a>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/login')}
              className="px-4 py-2 text-sm text-slate-700 font-bold hover:text-indigo-600 transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={() => navigate('/register')}
              className="px-5 py-2.5 rounded-xl bg-[#5a4bda] text-white text-sm font-bold hover:bg-[#4939cb] transition-all shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-indigo-500/15 via-purple-500/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute top-40 right-10 w-[350px] h-[350px] bg-pink-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#5a4bda]" /> All-In-One Exam Preparation Platform
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-[1.1] mb-6">
            Don't Just Study Hard. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5a4bda] via-purple-600 to-pink-600">
              Master Your Exam with AI.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            The intelligent study OS for <strong>UPSC, NEET, JEE, GATE & CA</strong>. Split up your syllabus, track consistency with GitHub-style heatmaps, chat with your textbooks, and watch mapped YouTube courses without distraction.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
            <button 
              onClick={() => navigate('/register')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#5a4bda] text-white font-extrabold text-base hover:bg-[#483ab4] transition-all shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
            >
              Start Studying Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#demo"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white text-slate-700 font-bold text-base hover:bg-slate-100 transition-all border border-slate-200 shadow-sm flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-indigo-600 fill-indigo-600" />
              Watch Live Preview
            </a>
          </div>

          {/* Quick Stats Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200/60 max-w-3xl mx-auto">
            <div className="text-center p-3">
              <div className="text-2xl font-black text-slate-900">4x Faster</div>
              <div className="text-xs font-semibold text-slate-500">Active Recall Retention</div>
            </div>
            <div className="text-center p-3">
              <div className="text-2xl font-black text-indigo-600">100+ Playlists</div>
              <div className="text-xs font-semibold text-slate-500">Curated YouTube Courses</div>
            </div>
            <div className="text-center p-3">
              <div className="text-2xl font-black text-emerald-600">52 Weeks</div>
              <div className="text-xs font-semibold text-slate-500">Study Heatmap Tracking</div>
            </div>
            <div className="text-center p-3">
              <div className="text-2xl font-black text-purple-600">RAG Document</div>
              <div className="text-xs font-semibold text-slate-500">Chat with Custom PDFs</div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive App Showcase Section */}
      <section id="demo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 mb-2">
            <CheckCircle2 className="w-3.5 h-3.5" /> Interactive Live Preview
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            See the NexaPrep Dashboard in Action
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Switch between exam presets to see how the syllabus, YouTube mappings, and heatmaps adapt.
          </p>
          
          {/* Preset Exam Switcher Pills */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {[
              { id: 'jee', label: 'JEE Advanced', icon: '⚛️' },
              { id: 'neet', label: 'NEET UG', icon: '🩺' },
              { id: 'upsc', label: 'UPSC CSE', icon: '🏛️' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === tab.id 
                    ? 'bg-[#5a4bda] text-white shadow-md shadow-indigo-500/30 scale-105' 
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Window Mockup */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden transition-all">
          
          {/* Window Chrome Header */}
          <div className="bg-slate-900 px-5 py-3 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline">nexaprep.ai/dashboard</span>
            </div>
            
            <div className="flex items-center gap-3 text-xs font-bold text-white">
              <span className="bg-slate-800 px-3 py-1 rounded-lg flex items-center gap-1 text-orange-400 border border-slate-700">
                <Flame className="w-3.5 h-3.5 fill-orange-400 text-orange-400" /> {currentDemo.streak} Day Streak
              </span>
              <span className="bg-slate-800 px-3 py-1 rounded-lg flex items-center gap-1 text-cyan-400 border border-slate-700 hidden sm:flex">
                ❄️ {currentDemo.freezes} Freezes
              </span>
              <span className="bg-indigo-600/80 px-3 py-1 rounded-lg text-indigo-100 flex items-center gap-1">
                ⚡ {currentDemo.tokens} Tokens
              </span>
            </div>
          </div>

          {/* Inner Dashboard Body */}
          <div className="p-5 sm:p-8 bg-slate-50/70 space-y-6">
            
            {/* Top Bar: Progress and AI Recommendation */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Overall Syllabus Completion */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Overall Progress</span>
                    <span className="text-xs font-extrabold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{currentDemo.exam}</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-black text-slate-900">{currentDemo.completion}%</span>
                    <span className="text-xs text-slate-500 font-semibold">Syllabus Mastered</span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden mb-2">
                    <div 
                      className="bg-gradient-to-r from-[#5a4bda] to-emerald-500 h-full rounded-full transition-all duration-700"
                      style={{ width: `${currentDemo.completion}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span>Target Exam Date: <strong>May 2026</strong></span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> On Track
                  </span>
                </div>
              </div>

              {/* AI Pick & Smart Revision Action */}
              <div className="lg:col-span-2 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 text-xs font-bold border border-indigo-400/20 mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> AI Recommended Next Step
                  </div>
                  <h4 className="text-xl font-black text-white mb-1.5">
                    {currentDemo.aiPick.title}
                  </h4>
                  <p className="text-indigo-200/90 text-sm leading-relaxed mb-4 max-w-xl">
                    {currentDemo.aiPick.desc}
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-indigo-800/60">
                  <button 
                    onClick={() => navigate('/register')}
                    className="px-4 py-2 rounded-xl bg-white text-indigo-950 font-bold text-xs hover:bg-indigo-50 transition-all flex items-center gap-1.5 shadow-md"
                  >
                    <Zap className="w-3.5 h-3.5 fill-indigo-900" /> Start Studying Now (3 Tokens)
                  </button>
                  <span className="text-xs text-indigo-300 font-medium hidden sm:inline">
                    Auto-generates Mermaid Mindmap & 3D Flashcards
                  </span>
                </div>
              </div>
            </div>

            {/* Split-Up Syllabus with Mapped YouTube Courses */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-indigo-600" /> Split-Up Master Syllabus
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Organized by Subjects, Chapters & Verified YouTube Courses</p>
                </div>
                <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-lg self-start sm:self-auto">
                  3 Core Subjects Active
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentDemo.subjects.map((sub, idx) => (
                  <div key={idx} className="bg-slate-50/80 rounded-xl p-4 border border-slate-200 hover:border-indigo-300 transition-all group">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-900 text-sm">{sub.name}</h4>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{sub.progress}%</span>
                    </div>
                    
                    <div className="text-xs text-slate-500 font-medium mb-3">{sub.chapters}</div>
                    
                    {/* Micro progress bar */}
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-4">
                      <div className={`h-full rounded-full bg-gradient-to-r ${sub.color}`} style={{ width: `${sub.progress}%` }}></div>
                    </div>

                    {/* YouTube Playlist Button */}
                    <div className="pt-2 border-t border-slate-200/80">
                      <div className="flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 cursor-pointer">
                        <YoutubeIcon className="w-4 h-4 text-red-600 shrink-0" />
                        <span className="truncate">{sub.ytTitle}</span>
                        <ExternalLink className="w-3 h-3 shrink-0 ml-auto opacity-60" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Study Heatmap Visualization */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-sm sm:text-base">Study Consistency Heatmap</h3>
                    <p className="text-xs text-slate-500">52-week activity log tracking daily study sessions & revision tests</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 self-end sm:self-auto font-medium">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-sm bg-slate-100"></div>
                    <div className="w-2.5 h-2.5 rounded-sm bg-emerald-200"></div>
                    <div className="w-2.5 h-2.5 rounded-sm bg-emerald-300"></div>
                    <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400"></div>
                    <div className="w-2.5 h-2.5 rounded-sm bg-emerald-600"></div>
                  </div>
                  <span>More</span>
                </div>
              </div>

              {/* Heatmap Grid */}
              <div className="overflow-x-auto pb-1 scrollbar-thin">
                <div className="flex gap-1 min-w-[700px]">
                  {Array.from({ length: 48 }).map((_, col) => (
                    <div key={col} className="flex flex-col gap-1">
                      {Array.from({ length: 7 }).map((_, row) => {
                        const isRecent = col > 34;
                        const isSuperActive = col > 42;
                        const colors = ['bg-slate-100', 'bg-emerald-200', 'bg-emerald-300', 'bg-emerald-400', 'bg-emerald-600'];
                        let level = 0;
                        if (isSuperActive) level = (col + row) % 5 === 0 ? 4 : (col + row) % 4 + 1;
                        else if (isRecent) level = (col * row) % 4;
                        else level = (col + row) % 7 === 0 ? 1 : 0;
                        
                        return (
                          <div 
                            key={row}
                            className={`w-3 h-3 rounded-xs ${colors[level]} transition-transform hover:scale-125 cursor-pointer`}
                            title={`Session Activity Level: ${level}`}
                          ></div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row: RAG PDF Chat & Voice Tutor Simulation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Document RAG Chat Box */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black uppercase text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg flex items-center gap-1.5 border border-blue-200">
                      <FileText className="w-3.5 h-3.5 text-blue-600" /> 'Chat with your PDF' Engine
                    </span>
                    <span className="text-xs text-slate-400 font-medium">RAG Active</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800 truncate">
                      <Paperclip className="w-4 h-4 text-indigo-600" />
                      <span className="truncate">{currentDemo.pdfDoc}</span>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">Indexed</span>
                  </div>
                  <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-100 text-xs text-slate-700 leading-relaxed mb-3">
                    <strong>User:</strong> "Summarize the 3 key assumptions for question 4 in this chapter."
                  </div>
                  <div className="bg-indigo-50/70 p-3 rounded-xl border border-indigo-100 text-xs text-slate-800 leading-relaxed">
                    <strong>AI Tutor:</strong> "Based on Section 4.2 of your uploaded notes: 1) Rigid body idealization, 2) Pure rolling without slipping, and 3) Uniform gravitational field."
                  </div>
                </div>
              </div>

              {/* Socratic Voice Tutor Preview */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black uppercase text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg flex items-center gap-1.5 border border-purple-200">
                      <Volume2 className="w-3.5 h-3.5 text-purple-600" /> Socratic Voice Tutor (TTS)
                    </span>
                    <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Voice Ready
                    </span>
                  </div>
                  
                  <div className="bg-slate-900 text-white p-4 rounded-xl shadow-inner mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-indigo-300">AUDIO SYNTHESIS</span>
                      <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                        <Play className="w-3 h-3 fill-white" /> Listen
                      </button>
                    </div>
                    <p className="text-xs text-slate-200 italic leading-relaxed">
                      "Instead of giving you the formula directly, think about what happens when angular momentum is conserved while radius decreases. What must happen to velocity?"
                    </p>
                  </div>
                  <p className="text-xs text-slate-500">
                    Browser Web Speech API integration allows hands-free audio revision while solving problems on paper.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Complete Feature Arsenal Grid */}
      <section id="features" className="bg-white py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#5a4bda] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Engineered for Serious Aspirants
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-4">
              Everything You Need to Crack Your Toughest Exams
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We replaced disjointed browser tabs, YouTube rabbit holes, and static PDF notes with a unified, distraction-free study architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryFeatures.map((feat, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-200 group-hover:scale-110 transition-transform">
                      {feat.icon}
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${feat.badgeColor}`}>
                      {feat.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-[#5a4bda] transition-colors">
                    {feat.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {feat.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>{feat.metric}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#5a4bda] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Deep-Dive: Syllabus & YouTube Section */}
      <section id="syllabus" className="py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                Structured Learning
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3 mb-5">
                Never Get Lost in a 1,000-Page Syllabus Again.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Most students fail competitive exams not because they don't work hard, but because they study topics haphazardly. NexaPrep splits your exam curriculum into logical modules and maps verified video lectures directly to each concept.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Split-Up Hierarchy", desc: "Subjects &rarr; Chapters &rarr; Micro-Topics with progress bars." },
                  { title: "Targeted YouTube Playlists", desc: "No algorithm recommendations or distraction traps. Just the exact lectures." },
                  { title: "Dynamic Completion Metrics", desc: "Automated calculation of covered topics vs remaining days until the exam." },
                  { title: "Instant Revision Sheet Generation", desc: "Click any topic to generate Mermaid mind-maps and flashcards instantly." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <strong className="text-slate-900 text-sm">{item.title}:</strong>
                      <span className="text-slate-600 text-sm ml-1">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button 
                  onClick={() => navigate('/register')}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg"
                >
                  Explore Your Syllabus Free <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Graphic */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl relative">
              <div className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-4 flex items-center justify-between">
                <span>Sample Topic Detail View</span>
                <span className="text-red-600 font-bold flex items-center gap-1">
                  <YoutubeIcon className="w-4 h-4" /> Integrated
                </span>
              </div>
              
              <div className="bg-slate-900 text-white p-5 rounded-2xl mb-4">
                <span className="text-xs font-mono text-indigo-400">PHYSICS &bull; ROTATIONAL MECHANICS</span>
                <h4 className="text-lg font-black mt-1 mb-2">Moment of Inertia of Composite Bodies</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  High-yield subtopic for JEE & NEET. Covers Parallel Axis Theorem and Perpendicular Axis Theorem applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-600/90 hover:bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 cursor-pointer">
                    <YoutubeIcon className="w-3.5 h-3.5" /> Watch Full Subject Playlist
                  </span>
                  <span className="bg-slate-800 text-slate-200 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" /> Open Theory Sheet
                  </span>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-emerald-800">Topic Completion Status</div>
                  <div className="text-xs text-emerald-600 font-medium">Flashcards Mastered: 8 / 10</div>
                </div>
                <span className="bg-emerald-600 text-white text-xs font-black px-3 py-1 rounded-full">
                  80% Mastered
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works 3-Step Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Frictionless Setup
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
              Three Steps to 10x Your Study Output
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Select Your Target Exam",
                desc: "Choose from UPSC, NEET, JEE, GATE, CA, or input your custom university syllabus. NexaPrep immediately seeds your personalized curriculum."
              },
              {
                step: "02",
                title: "Activate AI Revision & Playlists",
                desc: "Generate interactive mind-maps with Mermaid.js, upload your textbook PDFs for contextual Q&A, and start active recall flashcards."
              },
              {
                step: "03",
                title: "Build Your Daily Streak",
                desc: "Log your sessions daily to turn your 52-week activity heatmap green. Use freeze tokens for unexpected days and maintain unbreakable discipline."
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative overflow-hidden">
                <span className="text-5xl font-black text-indigo-200/50 absolute top-4 right-4">{step.step}</span>
                <div className="w-10 h-10 rounded-xl bg-[#5a4bda] text-white font-black flex items-center justify-center text-sm mb-5 shadow-md shadow-indigo-500/20">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Focus Zone & Audio Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Headphones className="w-4 h-4 text-indigo-400" /> Integrated Focus Zone
            </div>
            <h3 className="text-3xl font-black text-white mb-2">
              Built-In Pomodoro Timers & Ambient Lofi Beats
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
              Eliminate context-switching. Stay inside your study workspace with integrated 25/5 focus cycles and smooth study music without opening Spotify or YouTube tabs.
            </p>
          </div>
          <button 
            onClick={() => navigate('/register')}
            className="px-6 py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-sm transition-all shadow-xl shadow-indigo-500/30 whitespace-nowrap"
          >
            Try Focus Zone Free
          </button>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#5a4bda] border border-indigo-100 shadow-sm">
            <Zap className="w-8 h-8 fill-[#5a4bda]" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Ready to Build Your Unstoppable Study Streak?
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto mb-8">
            Join students who have replaced chaos and procrastination with structure, active recall, and AI clarity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigate('/register')}
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#5a4bda] text-white font-extrabold text-lg hover:bg-[#483ab4] transition-all shadow-xl shadow-indigo-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
            >
              Create Your Free Account
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-100 text-slate-700 font-bold text-lg hover:bg-slate-200 transition-all"
            >
              Existing User? Sign In
            </button>
          </div>
          
          <p className="text-xs text-slate-400 font-medium mt-5">
            Free forever tier includes 100 bonus AI tokens &bull; No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#5a4bda] rounded-xl p-2 text-white">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <span className="text-white font-black text-lg block leading-tight">NexaPrep AI</span>
              <span className="text-xs text-slate-500">Next-Gen Intelligent Study OS</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold">
            <a href="https://github.com/rvidya15/prepNexus-AI" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              GitHub Repository
            </a>
            <a href="https://prep-nexus-ai-eight.vercel.app/login" className="hover:text-white transition-colors">
              Live Web App
            </a>
            <span className="text-slate-600">&bull;</span>
            <span>MIT License</span>
          </div>

          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} NexaPrep AI. Engineered for ambitious minds.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Landing;
