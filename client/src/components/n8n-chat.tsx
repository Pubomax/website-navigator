import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export function N8nChat() {
  useEffect(() => {
    // This effect ensures the script only runs client-side
    const loadChatScript = () => {
      try {
        // Check if the script is already loaded
        if (document.getElementById('n8n-chat-script')) {
          return;
        }
        
        // Create and append the script element
        const script = document.createElement('script');
        script.id = 'n8n-chat-script';
        script.src = 'https://n8n.srv793146.hstgr.cloud/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat';
        script.async = true;
        
        // Append to document body
        document.body.appendChild(script);
        
        return () => {
          // Cleanup function to remove the script if component unmounts
          if (document.getElementById('n8n-chat-script')) {
            document.getElementById('n8n-chat-script')?.remove();
          }
        };
      } catch (error) {
        console.error('Failed to load n8n chat widget:', error);
      }
    };
    
    loadChatScript();
  }, []);

  return (
    // Using Helmet to add the required styles for the chat widget
    <Helmet>
      <style type="text/css">
        {`
          .n8n-chat-widget {
            z-index: 1000 !important;
          }
          
          .n8n-chat-widget-button {
            background-color: #4f46e5 !important; /* Indigo color matching our theme */
            color: white !important;
            border-radius: 50% !important;
            box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3) !important;
            width: 56px !important;
            height: 56px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            position: fixed !important;
            bottom: 24px !important;
            right: 24px !important;
            cursor: pointer !important;
            transition: all 0.2s ease-in-out !important;
          }
          
          .n8n-chat-widget-button:hover {
            transform: scale(1.05) !important;
            box-shadow: 0 8px 16px rgba(79, 70, 229, 0.4) !important;
          }
          
          .n8n-chat-window {
            border-radius: 12px !important;
            overflow: hidden !important;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12) !important;
          }
          
          .n8n-chat-header {
            background-color: #4f46e5 !important;
            color: white !important;
          }
        `}
      </style>
    </Helmet>
  );
}

export default N8nChat;