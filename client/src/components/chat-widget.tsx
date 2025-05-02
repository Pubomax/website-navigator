import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hello! How can I help you today?', sender: 'bot', timestamp: new Date() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message to chat
    const userMessage: Message = {
      text: message,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setMessage('');
    
    try {
      // Send message to n8n webhook
      const response = await fetch('https://n8n.srv793146.hstgr.cloud/webhook/f406671e-c954-4691-b39a-66c90aa2f103', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.text,
          source: 'website_chat'
        }),
      });
      
      if (response.ok) {
        // Parse response
        const data = await response.json();
        
        // Add bot response to chat
        const botMessage: Message = {
          text: data.response || "Thank you for your message. I'll get back to you soon.",
          sender: 'bot',
          timestamp: new Date()
        };
        
        setMessages((prev) => [...prev, botMessage]);
      } else {
        // Handle error
        setMessages((prev) => [
          ...prev,
          {
            text: "Sorry, I'm having trouble connecting to our systems. Please try again later.",
            sender: 'bot',
            timestamp: new Date()
          }
        ]);
      }
    } catch (error) {
      // Handle network error
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I couldn't send your message. Please check your internet connection and try again.",
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Scroll to bottom of messages when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.sender === 'user' 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-gray-100 text-gray-800">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 flex items-center gap-2">
            <Input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-50"
              disabled={isLoading}
            >
              <Send size={18} />
            </button>
          </form>
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