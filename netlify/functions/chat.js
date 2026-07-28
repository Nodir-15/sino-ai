// netlify/functions/chat.js
export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { messages } = JSON.parse(event.body);

    // system prompt for the AI model
    const systemPrompt = messages.find(m => m.role === 'system')?.content || 'You are a helpful assistant.';
    
    // messages history (user & model)
    const conversation = messages.filter(m => m.role !== 'system');

    const contents = conversation.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // gemini API endpoint
    const apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { 
          parts: [{ text: systemPrompt }] 
        },
        contents,
        generationConfig: { 
          temperature: 0.7, 
          maxOutputTokens: 1024 
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API Error:', data);
      return {
        statusCode: 200, 
        body: JSON.stringify({ 
          reply: `Ошибка API (${response.status}): ${data.error?.message || 'Проверьте ключ в настройках Netlify.'}` 
        })
      };
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'ИИ не смог сгенерировать текст. Попробуйте другой вопрос.';

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply })
    };

  } catch (error) {
    console.error('Server Error:', error);
    return {
      statusCode: 200,
      body: JSON.stringify({ reply: "Внутренняя ошибка сервера: " + error.message })
    };
  }
}