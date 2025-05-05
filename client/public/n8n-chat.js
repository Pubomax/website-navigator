// N8n Chat Widget Integration
(function() {
  // Add CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
  document.head.appendChild(link);

  // Load the chat module
  const script = document.createElement('script');
  script.type = 'module';
  script.innerHTML = `
    import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
    
    // Initialize chat with the webhook URL
    window.addEventListener('DOMContentLoaded', () => {
      createChat({
        webhook: {
          url: 'https://n8n.srv793146.hstgr.cloud/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat'
        },
        branding: {
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
      });
    });
  `;
  document.head.appendChild(script);
})();