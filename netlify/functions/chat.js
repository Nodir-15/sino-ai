// netlify/functions/chat.js
export async function handler(event) {
  // Allow only POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { messages } = JSON.parse(event.body);

    // 1. Extract the system instruction for the AI
    const systemPrompt = messages.find(m => m.role === 'system')?.content || 'You are a helpful assistant.';
    
    // 2. Filter out the system prompt to keep only user/model conversation history
    const conversation = messages.filter(m => m.role !== 'system');

    // 3. Map messages to Gemini format (role must be 'user' or 'model')
    const contents = conversation.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // Use v1beta - it's the most stable version for system_instruction and 1.5-flash model
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { 
          parts: [{ text: systemPrompt }] 
        },
        contents: contents,
        generationConfig: { 
          temperature: 0.7, 
          maxOutputTokens: 2048 
        }
      })
    });

    const data = await response.json();

    // Check if the API request was successful
    if (!response.ok) {
      console.error('Gemini API Error:', data);
      return {
        statusCode: 200, 
        body: JSON.stringify({ 
          reply: `API Error: ${data.error?.message || 'Check your API Key in Netlify settings.'}` 
        })
      };
    }

    // Extract the AI response text
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'AI did not provide a response.';

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply })
    };

  } catch (error) {
    console.error('Server Error:', error);
    return {
      statusCode: 200,
      body: JSON.stringify({ reply: "Server error: " + error.message })
    };
  }
}