import { useEffect, useState } from 'react';
import { loadScript } from '@/lib/script-loader';

interface ChatWidgetConfig {
  webhook: {
    url: string;
    route: string;
  };
  branding: {
    logo: string;
    name: string;
    welcomeText: string;
    responseTimeText: string;
  };
  style: {
    primaryColor: string;
    secondaryColor: string;
    position: string;
    backgroundColor: string;
    fontColor: string;
  };
}

const ChatWidget: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Define the global config
    const config: ChatWidgetConfig = {
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
        fontColor: '#333333',
        zIndex: 9999 // Ensure the widget appears above other elements
      }
    };

    // Set the config on window object
    (window as any).ChatWidgetConfig = config;
    
    // Log to confirm the config is set
    console.log('ChatWidgetConfig initialized:', (window as any).ChatWidgetConfig);
    
    // Check if the widget script is already loaded
    const existingScript = document.getElementById('n8n-chat-script');
    if (existingScript) {
      console.log('Chat script already exists, not loading again');
      setIsLoaded(true);
      return;
    }

    // Create and load the script using the script loader utility
    try {
      console.log('Loading chat widget script...');
      // Add a small delay to ensure other DOM elements are loaded first
      setTimeout(() => {
        loadScript(
          'https://cdn.jsdelivr.net/gh/WayneSimpson/n8n-chatbot-template@latest/chat-widget.js',
        () => {
          console.log('Chat widget script loaded successfully');
          setIsLoaded(true);
          
          // Check if widget appears after script loads
          setTimeout(() => {
            const widgetElements = document.querySelectorAll('.n8n-chat-widget');
            console.log('Chat widget elements found:', widgetElements.length);
            if (widgetElements.length === 0) {
              console.log('No widget elements found, checking DOM for other clues...');
              const chatButtons = document.querySelectorAll('button[aria-label*="chat"]');
              console.log('Chat buttons found:', chatButtons.length);
            }
          }, 1000);
        },
          { id: 'n8n-chat-script' }
        );
        
        // Create a manual trigger to ensure the widget is displayed
        setTimeout(() => {
          const event = new Event('chat-widget-ready');
          document.dispatchEvent(event);
          console.log('Manually triggered widget ready event');
        }, 1000);
      }, 100);
    } catch (error) {
      console.error('Error loading chat widget script:', error);
    }

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.getElementById('n8n-chat-script');
      if (existingScript) {
        document.body.removeChild(existingScript);
        console.log('Chat widget script removed');
      }
      
      // Remove widget DOM elements if present
      const widgetElements = document.querySelectorAll('.n8n-chat-widget');
      widgetElements.forEach(el => {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
      
      // Clean up window config
      delete (window as any).ChatWidgetConfig;
      console.log('Chat widget config removed');
    };
  }, []);

  // The component doesn't render any visible UI itself
  // The chat widget will be injected by the script
  return null;
};

export default ChatWidget;