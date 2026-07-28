import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from './i18n.jsx';

const Chat = () => {
  const { t, lang } = useTranslation();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Реф для отслеживания контейнера сообщений
  const scrollRef = useRef(null);

  const chatKey = lang === 'uz' ? 'Chat' : 'chat';

  // ФУНКЦИЯ АВТО-СКРОЛЛА: срабатывает при изменении списка сообщений или статуса загрузки
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth' // Плавный скролл
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
    <section id="chat-ai" className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4"> {/* Широкий контейнер 6xl */}
        
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            {lang === 'ru' ? 'Чат с Sino AI' : 'Sino AI bilan suhbat'}
          </h2>
          <p className="text-gray-500 text-lg">
            {lang === 'ru' ? 'Задайте любой вопрос о вашем здоровье' : 'Sog\'ligingiz haqida istalgan savolni bering'}
          </p>
        </div>

        {/* Главное окно чата */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-emerald-100/40 border border-emerald-100 overflow-hidden flex flex-col h-[750px]">
          
          {/* Контейнер сообщений с АВТО-СКРОЛЛОМ */}
          <div 
            ref={scrollRef}
            className="flex-1 p-6 md:p-10 space-y-6 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed"
          >
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center opacity-30 text-center">
                <div className="text-7xl mb-4">🩺</div>
                <p className="text-2xl font-bold">
                   {lang === 'ru' ? 'Я готов помочь!' : 'Yordam berishga tayyorman!'}
                </p>
              </div>
            )}
            
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-3xl shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 rounded-tl-none border border-emerald-100'
                }`}>
                  <div className={`text-[10px] uppercase font-black mb-1.5 tracking-widest opacity-60 ${m.role === 'user' ? 'text-emerald-100' : 'text-emerald-600'}`}>
                    {m.role === 'user' ? (lang === 'ru' ? 'Вы' : 'Siz') : 'Sino AI Assistant'}
                  </div>
                  <div className="text-[16px] leading-relaxed font-medium whitespace-pre-wrap">
                    {m.content}
                  </div>
                </div>
              </div>
            ))}

            {/* Анимация загрузки (печатает...) */}
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
          
          {/* Поле ввода */}
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
    </section>
  );
};

export default Chat;