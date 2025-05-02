import { Request, Response } from 'express';
import axios from 'axios';

// Set up proxy to handle n8n chat requests
export async function setupChatProxy(req: Request, res: Response) {
  try {
    // Return an HTML page that embeds the n8n chat script
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chat with Minecore</title>
        <style>
          body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            overflow: hidden;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          }
          
          .header {
            background-color: #4f46e5;
            color: white;
            padding: 12px 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 500;
          }
          
          #chat-container {
            height: calc(100% - 48px);
            width: 100%;
            overflow: hidden;
          }
          
          /* Custom styles for n8n chat elements that will be injected */
          #n8n-chat {
            height: 100% !important;
            max-height: none !important;
            border: none !important;
          }
          
          .n8n-chat-widget {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            width: 100% !important;
            max-width: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }
          
          .n8n-chat-window {
            height: 100% !important;
            max-height: none !important;
            border-radius: 0 !important;
          }
          
          .n8n-chat-header {
            display: none !important;
          }
          
          .n8n-chat-body {
            height: 100% !important;
            max-height: none !important;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div>Chat with Minecore</div>
          <div id="close-button" style="cursor: pointer; font-size: 20px; font-weight: bold;">&times;</div>
        </div>
        <script>
          document.getElementById('close-button').addEventListener('click', function() {
            window.parent.postMessage('close-chat', '*');
          });
        </script>
        <div id="chat-container"></div>
        
        <!-- n8n Chat Script -->
        <script src="https://n8n.srv793146.hstgr.cloud/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat"></script>
      </body>
      </html>
    `;

    // Set the appropriate headers
    res.set({
      'Content-Type': 'text/html',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });

    // Return the HTML content
    res.send(htmlContent);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).send('Error loading chat interface');
  }
}