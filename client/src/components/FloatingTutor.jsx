import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, Send, X, MessageSquare } from 'lucide-react';

const FloatingTutor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Hi! I'm your NexaPrep Guide. Need help with a topic, scheduling a revision, or just feeling stressed? I'm here for you." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);

  const speak = (text) => {
    if (!('speechSynthesis' in window)) return;
    if (!text) return;

    window.speechSynthesis.cancel(); // Clear queue
    const cleanText = text.replace(/\[ACTION_ITEM\].*/g, '').replace(/[\*\#]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    
    // Use default OS voice for maximum compatibility
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = async () => {
    if(!input.trim()) return;

    // Browser audio unlock: must happen synchronously on user click
    if (voiceEnabled && 'speechSynthesis' in window) {
      const unlock = new SpeechSynthesisUtterance('');
      unlock.volume = 0;
      window.speechSynthesis.speak(unlock);
    }

    const userMsg = input;
    const newMsgs = [...messages, { role: 'user', content: userMsg }];
    setMessages(newMsgs);
    setInput('');
    setIsLoading(true);
    
    try {
      const api = (await import('../api/axiosConfig')).default;
      const res = await api.post('/ai/tutor', { query: userMsg });
      
      const reply = res.data.reply;
      setMessages([...newMsgs, { role: 'ai', content: reply }]);
      
      // Small delay to ensure React state updates before speaking
      setTimeout(() => speak(reply), 100);
    } catch (err) {
      const errReply = err.response?.status === 402 ? "You're out of tokens! Please buy more." : "Sorry, I couldn't connect to my neural net. Check your API settings.";
      setMessages([...newMsgs, { role: 'ai', content: errReply }]);
      setTimeout(() => speak(errReply), 100);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-[350px] sm:w-[500px] h-[600px] mb-4  bg-white/95 backdrop-blur-xl border  border-indigo-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-indigo-100 flex items-center justify-between bg-indigo-50/50">
              <div className="flex items-center gap-3">
                <Bot className="text-indigo-600 w-5 h-5" />
                <h3 className="font-bold text-sm text-gray-800">NexaPrep Guide</h3>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => {
                    setVoiceEnabled(!voiceEnabled);
                    if (voiceEnabled) window.speechSynthesis.cancel();
                  }} 
                  className={`text-xs font-bold px-2 py-1 rounded border transition ${voiceEnabled ? 'bg-indigo-100 text-indigo-700 border-indigo-200' : 'bg-gray-100 text-gray-400 border-gray-200'}`}
                  title={voiceEnabled ? "Voice Enabled" : "Voice Disabled"}
                >
                  {voiceEnabled ? '🔊 Voice On' : '🔇 Muted'}
                </button>
                <button onClick={() => { setIsOpen(false); window.speechSynthesis.cancel(); }} className="text-gray-400 hover:text-red-500 transition">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${msg.role === 'user' ? ' bg-[#5a4bda]' : ' bg-indigo-100'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4  text-indigo-600" />}
                  </div>
                  <div className={`p-3 rounded-2xl shadow-sm max-w-[80%] ${msg.role === 'user' ? ' bg-[#5a4bda] text-white rounded-tr-none' : ' bg-gray-50 border  border-gray-200 rounded-tl-none'}`}>
                     <div className="flex justify-between items-start gap-2">
                       <p className="whitespace-pre-wrap">{typeof msg.content === 'string' ? msg.content.replace(/\[ACTION_ITEM\].*/g, '') : "No content"}</p>
                       {msg.role === 'ai' && (
                         <button onClick={() => speak(msg.content)} className="text-gray-400 hover:text-indigo-600 transition shrink-0" title="Read Aloud">
                           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
                         </button>
                       )}
                     </div>
                     
                     {typeof msg.content === 'string' && msg.content.includes('[ACTION_ITEM]') && (
                       <div className="mt-3 p-2  bg-white rounded-lg border border-orange-500/50 flex flex-col gap-1">
                         <span className="text-orange-500 text-[10px] font-bold tracking-wider">⚡ ACTION SCHEDULED</span>
                       </div>
                     )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="text-xs text-indigo-600 animate-pulse flex items-center gap-2">
                  <Bot className="w-3 h-3" /> Thinking...
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-3  bg-white border-t  border-indigo-100 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything or paste a YouTube URL..." 
                className="flex-1  bg-gray-50 border  border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#5a4bda] transition"
              />
              <button 
                onClick={handleSend}
                className="bg-[#5a4bda] text-white px-3 py-2 rounded-lg font-bold hover:bg-indigo-700 transition shadow-md flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#5a4bda] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-700 transition-colors z-50"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};

export default FloatingTutor;
