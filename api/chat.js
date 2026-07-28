// api/chat.js
export default async function handler(req, res) {
  // Разрешаем только POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { messages } = req.body; // В Vercel body уже распарсен

    const systemPrompt = messages.find(m => m.role === 'system')?.content || 'You are a helpful assistant.';
    const conversation = messages.filter(m => m.role !== 'system');

    const contents = conversation.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // Используем Gemini 3 Flash Preview (или 1.5, если 3 еще не во всех регионах)
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: contents,
        generationConfig: { temperature: 0.8, maxOutputTokens: 4096 }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(200).json({ reply: `API Error: ${data.error?.message || 'Check Key'}` });
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';

    // Отправляем ответ
    return res.status(200).json({ reply });

  } catch (error) {
    return res.status(200).json({ reply: "Server error: " + error.message });
  }
}