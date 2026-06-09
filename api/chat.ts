import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Retrieve Grok API key from system environment variables
  const apiKey = process.env.GROK_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'GROK_API_KEY environment variable is not configured on the hosting server.',
    });
  }

  const model = process.env.GROK_MODEL || 'grok-beta';
  const apiBaseUrl = process.env.AI_BASE_URL || 'https://api.x.ai/v1';

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid body: "messages" array is required.' });
    }

    const response = await fetch(`${apiBaseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({
        error: `Grok API error: ${errorText || response.statusText}`,
      });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err: unknown) {
    console.error('Error proxying chat to Grok:', err);
    const errorMessage = err instanceof Error ? err.message : 'Internal Server Error while forwarding to Grok API';
    return res.status(500).json({
      error: errorMessage,
    });
  }
}
