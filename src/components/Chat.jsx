import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from './i18n.jsx';
import ReactMarkdown from 'react-markdown';

const Chat = () => {
  const { t, lang } = useTranslation();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const scrollRef = useRef(null);

  // Логика выбора ключа в i18n: для UZ — 'Chat', для остальных — 'chat'
  const chatKey = lang === 'uz' ? 'Chat' : 'chat';

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, loading]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: t(`${chatKey}.chat_ai_instruction`) },
            ...messages,
            userMsg
          ]
        })
      });

      const data = await response.json();
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="chat-ai" className="py-24 bg-gray-50/30">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Заголовок секции с поддержкой трех языков */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            {lang === 'ru' ? 'Чат с Sino AI' : lang === 'en' ? 'Chat with Sino AI' : 'Sino AI bilan suhbat'}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {lang === 'ru' 
              ? 'Ваш персональный медицинский ассистент на базе ИИ. Задайте вопрос о симптомах или анализах.' 
              : lang === 'en'
              ? 'Your personal medical AI assistant. Ask about symptoms or lab results.'
              : 'Sizning shaxsiy tibbiy AI yordamchingiz. Simptomlar yoki tahlillar haqida savol bering.'}
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-emerald-100/40 border border-emerald-100 overflow-hidden flex flex-col h-[750px]">
          
          <div 
            ref={scrollRef}
            className="flex-1 p-6 md:p-10 space-y-8 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed"
          >
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center opacity-30 text-center px-10">
                <div className="text-8xl mb-6">🩺</div>
                <p className="text-2xl font-bold text-emerald-900">
                   {lang === 'ru' 
                     ? 'Чем я могу вам помочь сегодня?' 
                     : lang === 'en' 
                     ? 'How can I help you today?' 
                     : 'Bugun sizga qanday yordam bera olaman?'}
                </p>
              </div>
            )}
            
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-6 rounded-3xl shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 rounded-tl-none border border-emerald-100'
                }`}>
                  <div className={`text-[10px] uppercase font-black mb-2 tracking-widest opacity-60 ${m.role === 'user' ? 'text-emerald-100' : 'text-emerald-600'}`}>
                    {m.role === 'user' 
                      ? (lang === 'ru' ? 'Вы' : lang === 'en' ? 'You' : 'Siz') 
                      : 'Sino AI Assistant'}
                  </div>

                  <div className="markdown-content text-[16px] leading-relaxed font-medium">
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-emerald-50 p-5 rounded-3xl rounded-tl-none border border-emerald-100 flex gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={sendMessage} className="p-6 bg-white border-t border-gray-100 flex gap-4 items-center">
            <input 
              className="flex-1 px-8 py-5 rounded-3xl bg-gray-50 border-none focus:ring-4 focus:ring-emerald-500/10 transition-all text-lg placeholder:text-gray-400"
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder={t(`${chatKey}.chat_placeholder`)}
            />
            <button 
              type="submit" 
              disabled={loading}
              className="bg-emerald-600 text-white w-16 h-16 rounded-3xl font-bold flex items-center justify-center hover:bg-emerald-700 active:scale-90 disabled:opacity-50 transition-all shadow-xl shadow-emerald-600/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .markdown-content h3 { font-size: 1.25rem; font-weight: 800; margin-top: 1rem; margin-bottom: 0.5rem; }
        .markdown-content p { margin-bottom: 0.75rem; }
        .markdown-content ul { list-style-type: disc; margin-left: 1.5rem; margin-bottom: 0.75rem; }
        .markdown-content li { margin-bottom: 0.25rem; }
        .markdown-content strong { font-weight: 800; color: inherit; }
        .markdown-content hr { border: 0; border-top: 1px solid rgba(0,0,0,0.1); margin: 1.5rem 0; }
      `}} />
    </section>
  );
};

export default Chat;