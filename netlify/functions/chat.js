// netlify/functions/chat.js
export async function handler(event) {
  // Разрешаем только POST запросы
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { messages } = JSON.parse(event.body);

    // 1. Находим системную инструкцию (на каком языке отвечать)
    const systemPrompt = messages.find(m => m.role === 'system')?.content || '';
    
    // 2. Оставляем только историю переписки
    const conversation = messages.filter(m => m.role !== 'system');

    // 3. Формируем структуру для Gemini.
    // Мы добавляем инструкцию в самое первое сообщение пользователя.
    const contents = conversation.map((msg, index) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ 
        text: index === 0 
          ? `Инструкция: ${systemPrompt}\n\nВопрос пользователя: ${msg.content}` 
          : msg.content 
      }]
    }));

    // ИСПОЛЬЗУЕМ СТАБИЛЬНУЮ ВЕРСИЮ v1 (она самая совместимая)
    const apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: contents,
        generationConfig: { 
          temperature: 0.7, 
          maxOutputTokens: 2048 
        }
      })
    });

    const data = await response.json();

    // Если Google вернул ошибку
    if (!response.ok) {
      console.error('Google API Error:', data);
      return {
        statusCode: 200, 
        body: JSON.stringify({ 
          reply: `Ошибка API (${response.status}): ${data.error?.message || 'Проверьте ключ в настройках Netlify.'}` 
        })
      };
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'ИИ не прислал текст ответа.';

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply })
    };

  } catch (error) {
    console.error('Server Error:', error);
    return {
      statusCode: 200,
      body: JSON.stringify({ reply: "Ошибка сервера: " + error.message })
    };
  }
}