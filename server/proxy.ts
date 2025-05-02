import { Request, Response } from 'express';
import axios from 'axios';

// Set up proxy to handle n8n chat requests
export async function setupChatProxy(req: Request, res: Response) {
  try {
    // Forward the request to n8n
    const response = await axios({
      method: 'get',
      url: 'https://n8n.srv793146.hstgr.cloud/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml',
        'Accept-Language': 'en-US,en;q=0.9',
        'User-Agent': req.headers['user-agent'] || 'Mozilla/5.0',
        'Referer': req.headers.referer || 'https://minecoregroup.com',
      },
      responseType: 'text'
    });

    // Set the appropriate headers to allow embedding
    res.set({
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    });

    // Return the HTML content
    res.send(response.data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).send('Error proxying to n8n');
  }
}