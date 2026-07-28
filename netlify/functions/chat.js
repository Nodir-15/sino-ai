// netlify/functions/chat.js
export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { messages } = JSON.parse(event.body);
    const systemPrompt = messages.find(m => m.role === 'system')?.content || '';
    const conversation = messages.filter(m => m.role !== 'system');

    const contents = conversation.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents,
          generationConfig: { temperature: 0.7, maxOutputTokens: 1024 }
        })
      }
    );

    const data = await response.json();

    // if google responds error
    if (!response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          reply: `Ошибка API: ${data.error?.message || 'Проверьте GEMINI_API_KEY в настройках Netlify'}` 
        })
      };
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'ИИ не дал ответа. Возможно, вопрос заблокирован фильтром безопасности.';

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply })
    };
  } catch (error) {
    return { 
      statusCode: 200, 
      body: JSON.stringify({ reply: "Ошибка сервера: " + error.message }) 
    };
  }
}