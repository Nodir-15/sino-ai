// netlify/functions/chat.js
export async function handler(event) {
  // Allow only POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { messages } = JSON.parse(event.body);

    // 1. Find the system message
    const systemMessage = messages.find(m => m.role === 'system')?.content || 'You are a helpful assistant.';
    
    // 2. Prepare conversation history for Gemini
    const contents = messages
      .filter(m => m.role !== 'system')
      .map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

    // 3. API URL using your key from Netlify Environment Variables
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { 
          parts: [{ text: systemMessage }] 
        },
        contents: contents,
        generationConfig: { 
          temperature: 0.7,
          maxOutputTokens: 2048 
        }
      })
    });

    const data = await response.json();

    // If Google returns an error
    if (!response.ok) {
      console.error('Google API Error Details:', JSON.stringify(data));
      return {
        statusCode: 200, 
        body: JSON.stringify({ 
          reply: `Google Error: ${data.error?.message || 'Check your API Key.'}` 
        })
      };
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from AI.';

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply })
    };

  } catch (error) {
    return {
      statusCode: 200,
      body: JSON.stringify({ reply: "Connection error: " + error.message })
    };
  }
}