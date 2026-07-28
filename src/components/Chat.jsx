import { useState, useRef, useEffect } from 'react';
import { useTranslation } from './i18n'; // если i18n.jsx лежит рядом

export default function Chat() {
  const { t, lang } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);

 useEffect(() => {
  if (messages.length > 0 || isLoading) {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
}, [messages, isLoading]);

  const systemPrompts = {
    uz: `Siz Sino AI — shaxsiy tibbiy yordamchisiz. 
Faqat o'zbek tilida javob bering. 
Oddiy va tushunarli tilda gapiring. 
Hech qachon tashxis qo'ymang va davolanishni tavsiya qilmang. 
Faqat simptomlarni tushuntiring va qaysi shifokorga murojaat qilish kerakligini maslahat bering.
Javoblar qisqa va aniq bo'lsin.`,

    ru: `Ты Sino AI — персональный медицинский помощник. 
Отвечай только на русском языке. 
Говори простым и понятным языком. 
Никогда не ставь диагнозы и не назначай лечение. 
Только объясняй симптомы и советуй, к какому врачу обратиться.
Ответы делай короткими и чёткими.`,

    en: `You are Sino AI — a personal medical assistant. 
Reply only in English. 
Speak in simple and clear language. 
Never give diagnoses or prescribe treatment. 
Only explain symptoms and advise which doctor to see.
Keep answers short and precise.`
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemPrompts[lang] },
            ...newMessages
          ]
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error');
      }

      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.reply 
      }]);
    } catch (error) {
      console.error(error);
      const errorText = {
        uz: "Xatolik yuz berdi. Keyinroq urinib ko'ring.",
        ru: "Произошла ошибка. Попробуйте позже.",
        en: "An error occurred. Please try again later."
      };
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: errorText[lang] 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => setMessages([]);

  return (
    <div style={{ 
      maxWidth: 620, 
      margin: '0 auto', 
      display: 'flex', 
      flexDirection: 'column', 
      height: 520,
      border: '1px solid #e5e7eb',
      borderRadius: 16,
      overflow: 'hidden',
      background: '#fff',
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
    }}>
      {/* Header */}
      <div style={{ 
        padding: '14px 18px', 
        borderBottom: '1px solid #eee', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        background: '#f9fafb'
      }}>
        <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600 }}>{t('chat.title')}</h3>
        <button 
          onClick={clearChat}
          style={{ 
            fontSize: 13, 
            background: 'transparent', 
            border: 'none', 
            color: '#6b7280',
            cursor: 'pointer'
          }}
        >
          {t('chat.clear')}
        </button>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
        {messages.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            color: '#9ca3af', 
            marginTop: 60,
            fontSize: 15
          }}>
            {t('chat.placeholder')}
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} style={{ 
            marginBottom: 14, 
            textAlign: msg.role === 'user' ? 'right' : 'left' 
          }}>
            <div style={{
              display: 'inline-block',
              padding: '11px 15px',
              borderRadius: 14,
              maxWidth: '82%',
              background: msg.role === 'user' ? '#2563eb' : '#f3f4f6',
              color: msg.role === 'user' ? 'white' : '#111',
              fontSize: 15,
              lineHeight: 1.45,
              whiteSpace: 'pre-wrap'
            }}>
              {msg.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div style={{ color: '#6b7280', fontSize: 14, fontStyle: 'italic' }}>
            {t('chat.thinking')}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <form onSubmit={sendMessage} style={{ 
        display: 'flex', 
        gap: 10, 
        padding: 14, 
        borderTop: '1px solid #eee' 
      }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t('chat.placeholder')}
          disabled={isLoading}
          style={{ 
            flex: 1, 
            padding: '12px 16px', 
            borderRadius: 12, 
            border: '1px solid #d1d5db',
            outline: 'none',
            fontSize: 15
          }}
        />
        <button 
          type="submit" 
          disabled={isLoading || !input.trim()}
          style={{
            padding: '0 20px',
            borderRadius: 12,
            border: 'none',
            background: isLoading || !input.trim() ? '#93c5fd' : '#2563eb',
            color: 'white',
            fontWeight: 500,
            cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer'
          }}
        >
          {t('chat.send')}
        </button>
      </form>

      <p style={{ 
        fontSize: 12, 
        color: '#9ca3af', 
        textAlign: 'center', 
        padding: '0 16px 12px',
        margin: 0
      }}>
        {t('chat.disclaimer')}
      </p>
    </div>
  );
}