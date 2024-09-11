import { NextApiRequest, NextApiResponse } from 'next';

// This secret is used to verify the authenticity of the webhook request
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || "mysecret";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Verify the secret key
  const providedSecret = req.headers['x-webhook-secret'];
  if (providedSecret !== WEBHOOK_SECRET) {
    return res.status(401).json({ message: 'Invalid secret' });
  }

  try {
    const body = req.body;

    // Log the webhook data for debugging
    console.log("Webhook received:", body);

    // Process the webhook data here
    // e.g., store it in a database or trigger other services

    return res.status(200).json({ message: 'Webhook received successfully' });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
}
