import React, { useEffect } from 'react';

export function ChatWidget() {
  // This component will load the N8n chat widget from a CDN
  useEffect(() => {
    // Add N8n chat CSS
    const cssLink = document.createElement('link');
    cssLink.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    cssLink.rel = 'stylesheet';
    document.head.appendChild(cssLink);

    // Add N8n chat script
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'YOUR_PRODUCTION_WEBHOOK_URL'
      });
    `;
    document.body.appendChild(script);

    // Clean up on component unmount
    return () => {
      document.head.removeChild(cssLink);
      document.body.removeChild(script);
    };
  }, []);

  // This component doesn't render anything directly as N8n chat is injected into the DOM
  return null;
}