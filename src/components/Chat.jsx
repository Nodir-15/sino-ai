import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from './i18n.jsx';
import ReactMarkdown from 'react-markdown';

const Chat = () => {
  const { t, lang } = useTranslation();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollRef = useRef(null);
  const chatKey = lang === 'uz' ? 'Chat' : 'chat';

  // Авто-скролл к последнему сообщению
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
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
          messages: [{ role: 'system', content: t(`${chatKey}.chat_ai_instruction`) }, ...messages, userMsg]
        })
      });
      const data = await response.json();
      if (data.reply) setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) { 
      console.error(err); 
    } finally { 
      setLoading(false); 
    }
  };

  return (
    <>
      {/* ПЛАВАЮЩАЯ КНОПКА (FAB) */}
      {!isOpen && (
        <button 
          onClick={() => {
            setIsOpen(true);
            setTimeout(() => {
              const el = document.getElementById('chat-ai');
              if(el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="fixed bottom-8 right-8 w-16 h-16 bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all z-40 animate-bounce"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}

      {/* СЕКЦИЯ ЧАТА */}
      {isOpen && (
        <section id="chat-ai" className="py-24 bg-white border-t border-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900">Sino AI</h2>
              <p className="text-gray-400 mt-2">{lang === 'ru' ? 'Ваш медицинский помощник' : 'Sizning tibbiy yordamchingiz'}</p>
            </div>

            {/* ОКНО ЧАТА: Белый фон, огромные закругления, мягкая тень */}
            <div className="flex flex-col h-[700px] bg-white rounded-[3rem] border border-gray-100 shadow-[0_20px_50px_rgba(16,185,129,0.1)] overflow-hidden">
              
              {/* Область сообщений */}
              <div ref={scrollRef} className="flex-1 p-8 md:p-12 space-y-12 overflow-y-auto bg-white">
                {messages.length === 0 && (
                  <div className="h-full flex items-center justify-center text-gray-200">
                    <div className="text-center">
                      <p className="text-xl font-medium">{lang === 'ru' ? 'Начните диалог' : 'Muloqotni boshlang'}</p>
                    </div>
                  </div>
                )}
                
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[90%] text-[17px] leading-relaxed ${
                      m.role === 'user' ? 'text-emerald-600 font-bold' : 'text-gray-700 font-medium'
                    }`}>
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    </div>
                  </div>
                ))}
                
                {loading && (
                  <div className="flex justify-start">
                    <div className="text-emerald-400 font-bold animate-pulse">Sino AI is thinking...</div>
                  </div>
                )}
              </div>
              
              {/* НИЖНЯЯ ПАНЕЛЬ С ПОЛЕМ ВВОДА */}
              <form onSubmit={sendMessage} className="p-8 bg-white border-t border-gray-50 flex gap-4 items-center">
                <input 
                  className="flex-1 px-8 py-5 text-lg bg-gray-50 border border-transparent rounded-[2rem] outline-none transition-all focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 placeholder:text-emerald-200"
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  placeholder={t(`${chatKey}.chat_placeholder`)}
                />
                <button 
                  type="submit" 
                  disabled={loading}
                  className="text-emerald-600 disabled:opacity-20 transition-all hover:scale-110 active:scale-95"
                >
                  {/* Иконка повернута вправо */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 rotate-90" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Chat;