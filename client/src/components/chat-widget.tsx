import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="flex flex-col bg-white rounded-lg shadow-xl overflow-hidden w-[350px] h-[500px] border border-gray-200">
          <div className="flex items-center justify-between bg-indigo-600 p-4 text-white">
            <div className="font-medium">Chat with Minecore</div>
            <div 
              onClick={toggleChat}
              className="text-white hover:bg-indigo-700 h-8 w-8 flex items-center justify-center rounded-md cursor-pointer"
            >
              <X size={18} />
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <iframe 
              src="https://n8n.srv793146.hstgr.cloud/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat-embed" 
              title="Chat" 
              className="w-full h-full border-0"
              allow="microphone"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            ></iframe>
          </div>
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