import React, { useState, useEffect, useCallback } from 'react';
import { MessageCircle } from 'lucide-react';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  // Handle message from iframe to close chat
  const handleMessage = useCallback((event: MessageEvent) => {
    if (event.data === 'close-chat') {
      setIsOpen(false);
    }
  }, []);
  
  // Add event listener for messages from chat iframe
  useEffect(() => {
    window.addEventListener('message', handleMessage);
    
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [handleMessage]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="flex flex-col bg-white rounded-lg shadow-xl overflow-hidden w-[350px] h-[500px] border border-gray-200">
          <iframe 
            src="/api/chat-proxy"
            title="Chat with Minecore"
            className="w-full h-full border-0"
            allow="microphone"
          ></iframe>
        </div>
      ) : (
        <div 
          className="h-14 w-14 rounded-full flex items-center justify-center shadow-lg bg-indigo-600 hover:bg-indigo-700 transition-transform hover:scale-105 cursor-pointer"
          onClick={toggleChat}
        >
          <MessageCircle size={24} className="text-white" />
        </div>
      )}
    </div>
  );
}