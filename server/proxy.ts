import { Request, Response } from 'express';
import axios from 'axios';

// Set up proxy to handle chat requests
export async function setupChatProxy(req: Request, res: Response) {
  try {
    // Return an HTML page with the n8n chat script
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
            z-index: 1000;
            position: relative;
          }
          
          #chat-container {
            height: calc(100% - 48px);
            width: 100%;
            overflow: hidden;
            position: relative;
          }
          
          /* Styles to ensure n8n chat components display correctly */
          :root {
            --n8n-chat-border-radius: 0 !important;
            --n8n-chat-header-display: none !important;
          }
          
          .n8n-chat-widget {
            position: static !important;
            width: 100% !important;
            height: 100% !important;
            max-height: none !important;
            max-width: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
          
          .n8n-chat-window {
            border-radius: 0 !important;
            height: 100% !important;
          }
          
          .n8n-chat-header {
            display: none !important;
          }
          
          .n8n-chat-body {
            height: 100% !important;
            max-height: none !important;
          }
          
          #loading-indicator {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
          }
          
          .loader {
            display: inline-block;
            width: 40px;
            height: 40px;
            border: 4px solid rgba(79, 70, 229, 0.2);
            border-radius: 50%;
            border-top-color: #4f46e5;
            animation: spin 1s ease-in-out infinite;
            margin-bottom: 16px;
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        </style>
        <link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet" />
      </head>
      <body>
        <div class="header">
          <div>Chat with Minecore</div>
          <div id="close-button" style="cursor: pointer; font-size: 20px; font-weight: bold;">&times;</div>
        </div>
        
        <div id="chat-container"></div>
        
        <div id="loading-indicator">
          <div class="loader"></div>
          <div>Loading chat...</div>
        </div>
        
        <script>
          // Handle close button click
          document.getElementById('close-button').addEventListener('click', function() {
            window.parent.postMessage('close-chat', '*');
          });
          
          // Hide the loading indicator when the chat is loaded
          function hideLoading() {
            document.getElementById('loading-indicator').style.display = 'none';
          }
          
          // Show error message if loading fails
          function showError(message) {
            const loadingIndicator = document.getElementById('loading-indicator');
            loadingIndicator.innerHTML = \`
              <div style="color: #ef4444; margin-bottom: 8px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <div style="margin-bottom: 8px;">\${message}</div>
              <div>
                <p>Please contact us directly:</p>
                <p>Email: hello@minecoregroup.com</p>
                <p>Phone: 514-603-0598</p>
              </div>
            \`;
          }
          
          // Timeout to show error if chat doesn't load
          const loadingTimeout = setTimeout(() => {
            showError("Chat service is currently unavailable");
          }, 10000);
        </script>
        
        <script type="module">
          try {
            // Import the n8n chat module
            import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
            
            // Create the chat with the webhook URL and config
            createChat({
              webhookUrl: 'https://n8n.srv793146.hstgr.cloud/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat',
              webhookConfig: {
                method: 'POST',
                headers: { 'Authorization': 'Bearer YOUR_TOKEN' }
              },
              targetElement: '#chat-container'
            }).then(() => {
              console.log('Chat loaded successfully');
              hideLoading();
              clearTimeout(loadingTimeout);
            }).catch(error => {
              console.error('Failed to initialize chat:', error);
              showError("Unable to connect to chat service");
              clearTimeout(loadingTimeout);
            });
          } catch (error) {
            console.error('Error importing chat module:', error);
            showError("Failed to load chat interface");
            clearTimeout(loadingTimeout);
          }
        </script>
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