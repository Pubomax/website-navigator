import { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    // Add N8n chat CSS
    const cssLink = document.createElement('link');
    cssLink.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    cssLink.rel = 'stylesheet';
    document.head.appendChild(cssLink);

    // Create script tag for configuration
    const script = document.createElement('script');
    script.innerHTML = `
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
    document.body.appendChild(script);

    // Add N8n chat script
    const chatScript = document.createElement('script');
    chatScript.type = 'module';
    chatScript.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat(window.ChatWidgetConfig);
    `;
    document.body.appendChild(chatScript);

    return () => {
      document.head.removeChild(cssLink);
      document.body.removeChild(script);
      document.body.removeChild(chatScript);
    };
  }, []);

  return null;
};

export default ChatWidget;