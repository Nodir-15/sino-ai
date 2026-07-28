// netlify/functions/chat.js
export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  if (!process.env.GEMINI_API_KEY) {
    return {
      statusCode: 200,
      body: JSON.stringify({ reply: "Ошибка: Ключ GEMINI_API_KEY не задан в Netlify!" })
    };
  }

  try {
    const { messages } = JSON.parse(event.body);

    // Берем системную инструкцию (язык)
    const systemPrompt = messages.find(m => m.role === 'system')?.content || 'You are a helpful assistant.';
    
    // Формируем историю диалога
    const conversation = messages
      .filter(m => m.role !== 'system')
      .map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

    // ИСПОЛЬЗУЕМ МОДЕЛЬ ИЗ ТВОЕГО СКРИНШОТА
    const modelName = 'gemini-3-flash-preview';
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { 
          parts: [{ text: systemPrompt }] 
        },
        contents: conversation,
        generationConfig: { 
          temperature: 0.8,
          maxOutputTokens: 4096 
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini 3 API Error:', data);
      return {
        statusCode: 200, 
        body: JSON.stringify({ 
          reply: `Ошибка Gemini 3: ${data.error?.message || 'Доступ отклонен'}` 
        })
      };
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'ИИ не прислал текст.';

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