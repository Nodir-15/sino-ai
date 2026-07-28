import React, { useState } from 'react';
import { useTranslation } from './i18n.jsx';

const Chat = () => {
  const { t, lang } = useTranslation();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle key case difference in your i18n file (Chat vs chat)
  const chatKey = lang === 'uz' ? 'Chat' : 'chat';

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
            // Send the system instruction based on current language
            { role: 'system', content: t(`${chatKey}.chat_ai_instruction`) },
            ...messages, // Previous history
            userMsg      // Current user message
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
    // ID chat-ai is used for smooth scrolling from Navbar
    <section id="chat-ai" className="py-20 bg-emerald-50/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {lang === 'ru' ? 'Чат с Sino AI' : 'Sino AI bilan suhbat'}
          </h2>
          <p className="text-gray-500 mt-2">
            {lang === 'ru' ? 'Задайте любой вопрос о вашем здоровье' : 'Sog\'ligingiz haqida istalgan savolni bering'}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-emerald-100 overflow-hidden">
          {/* Chat Messages Log */}
          <div className="messages-log p-6 space-y-4" style={{ height: '400px', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
            {messages.length === 0 && (
              <div className="text-center text-gray-400 mt-20">
                {lang === 'ru' ? 'Здесь будет ваша переписка' : 'Bu yerda sizning yozishmalaringiz bo\'ladi'}
              </div>
            )}
            
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  m.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-tr-none' 
                    : 'bg-gray-100 text-gray-800 rounded-tl-none'
                }`}>
                  <div className="text-[10px] uppercase font-bold mb-1 opacity-70">
                    {m.role === 'user' ? (lang === 'ru' ? 'Вы' : 'Siz') : 'Sino AI'}
                  </div>
                  <div className="text-sm leading-relaxed">{m.content}</div>
                </div>
              </div>
            ))}

            {/* Loading Skeleton */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none animate-pulse text-gray-400">...</div>
              </div>
            )}
          </div>
          
          {/* Input Form */}
          <form onSubmit={sendMessage} className="p-4 bg-gray-50 border-t flex gap-2">
            <input 
              className="flex-1 px-5 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder={t(`${chatKey}.chat_placeholder`)}
            />
            <button 
              type="submit" 
              disabled={loading}
              className="bg-emerald-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-emerald-700 disabled:opacity-50 transition-colors"
            >
              {t(`${chatKey}.chat_send`)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Chat;