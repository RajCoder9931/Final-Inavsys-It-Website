import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const backendRes = await fetch(
      'http://20.25.106.163:3000/newsletter',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
      }
    );

    const data = await backendRes.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}
