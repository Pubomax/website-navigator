// N8N Chat Widget Configuration
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

// Create script element for the widget
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/gh/WayneSimpson/n8n-chatbot-template@ba944c3/chat-widget.js';
script.async = true;
document.body.appendChild(script);