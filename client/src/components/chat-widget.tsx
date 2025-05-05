import { useEffect } from 'react';

export function ChatWidget() {
  useEffect(() => {
    // Add chat config
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.n8nConfig = {
        webhook: {
          url: 'https://n8n.srv793146.hstgr.cloud/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat'
        }
      };
    `;
    document.head.appendChild(configScript);

    // Add N8n chat CSS
    const cssLink = document.createElement('link');
    cssLink.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    cssLink.rel = 'stylesheet';
    document.head.appendChild(cssLink);

    // Add N8n chat script
    const chatScript = document.createElement('script');
    chatScript.type = 'module';
    chatScript.src = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
    chatScript.onload = function() {
      // Create a script to initialize the chat after the module is loaded
      const initScript = document.createElement('script');
      initScript.innerHTML = `
        if (window.createChat) {
          window.createChat(window.n8nConfig);
        }
      `;
      document.body.appendChild(initScript);
    };
    document.body.appendChild(chatScript);

    // Clean up on unmount
    return () => {
      document.head.removeChild(configScript);
      document.head.removeChild(cssLink);
      document.body.removeChild(chatScript);
    };
  }, []);

  return null;
}