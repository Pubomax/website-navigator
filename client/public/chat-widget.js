// Simple chat widget loader that doesn't rely on ES modules
(function() {
  // Chat configuration
  const chatConfig = {
    webhook: {
      url: 'https://n8n.srv793146.hstgr.cloud/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat'
    },
    branding: {
      name: 'Minecore Group',
      welcomeText: 'Hi 👋, how can we help you?',
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

  // Step 1: Add the CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
  document.head.appendChild(link);

  // Step 2: Create a container for the chat
  const chatContainer = document.createElement('div');
  chatContainer.id = 'n8n-chat-container';
  document.body.appendChild(chatContainer);

  // Step 3: Load the N8n script
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.umd.js';
  script.onload = function() {
    // Step 4: Initialize the chat when the script is loaded
    if (window.n8nChat && window.n8nChat.createChat) {
      window.n8nChat.createChat(chatConfig);
    } else {
      console.error('N8n Chat not available after loading script');
    }
  };
  
  // Handle errors
  script.onerror = function() {
    console.error('Failed to load N8n Chat widget script');
  };
  
  // Add the script to the document
  document.body.appendChild(script);
})();