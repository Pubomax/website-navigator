import React, { useEffect } from 'react';

export function ChatWidget() {
  // This component will load the N8n chat widget from a CDN
  useEffect(() => {
    // Add N8n chat CSS
    const cssLink = document.createElement('link');
    cssLink.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    cssLink.rel = 'stylesheet';
    document.head.appendChild(cssLink);

    // Add chat widget configuration
    const configScript = document.createElement('script');
    configScript.textContent = `
      window.ChatWidgetConfig = {
        webhook: {
          url: 'https://n8n.srv793146.hstgr.cloud/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat',
          route: 'general'
        },
        branding: {
          logo: 'https://minecoregroup.com/logo-social.png',
          name: 'Minecore Group',
          welcomeText: 'Hi 👋, how can we help?',
          responseTimeText: 'We typically respond right away'
        },
        style: {
          primaryColor: '#854fff',
          secondaryColor: '#6b3fd4',
          position: 'right',
          backgroundColor: '#ffffff',
          fontColor: '#333333'
        }
      };
    `;
    document.head.appendChild(configScript);

    // Add N8n chat script
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat(window.ChatWidgetConfig);
    `;
    document.body.appendChild(script);

    // Clean up on component unmount
    return () => {
      document.head.removeChild(cssLink);
      document.head.removeChild(configScript);
      document.body.removeChild(script);
    };
  }, []);

  // This component doesn't render anything directly as N8n chat is injected into the DOM
  return null;
}