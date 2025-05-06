import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Send, X } from "lucide-react";

export function SimpleChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'bot', timestamp: Date}>>([]);
  const [isWaiting, setIsWaiting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial welcome message
  useEffect(() => {
    setMessages([
      {
        text: "Hi 👋, how can we help you?",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    const userMessage = {
      text: message,
      sender: 'user' as const,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsWaiting(true);

    try {
      console.log("Sending message to webhook...");
      const webhookUrl = 'https://n8n.srv793146.hstgr.cloud/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat';
      console.log("Webhook URL:", webhookUrl);
      
      const sessionId = 'web-' + Date.now();
      const messagePayload = {
        message: userMessage.text,
        sessionId: sessionId,
        route: 'general',
        url: window.location.href,
        userAgent: navigator.userAgent
      };
      console.log("Payload:", JSON.stringify(messagePayload));
      
      // Call webhook with proper format
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messagePayload),
      });

      console.log("Response status:", response.status);
      if (!response.ok) {
        console.error("Error response:", response);
        throw new Error("Failed to get response: " + response.status);
      }

      const data = await response.json();
      console.log("Response data:", data);
      
      // Check if the response is just echoing back our message
      if (data && data.message === userMessage.text) {
        console.log("Webhook is echoing back the message. Sending a fallback response instead.");
        setMessages(prev => [...prev, {
          text: "Thank you for your message! We'll be in touch shortly to help you increase revenue while working less.",
          sender: 'bot',
          timestamp: new Date()
        }]);
        return;
      }
      
      // Add bot response - handle different possible response formats from n8n
      const botResponse = data.response || data.message || data.text || data.content || 
                        (typeof data === 'string' ? data : "Thank you for your message! We'll get back to you soon.");
      
      setMessages(prev => [...prev, {
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }]);

    } catch (error) {
      console.error("Error sending message:", error);
      
      // Fallback response
      setMessages(prev => [...prev, {
        text: "Thanks for your message! One of our team members will get back to you shortly.",
        sender: 'bot',
        timestamp: new Date()
      }]);
    } finally {
      setIsWaiting(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-5 right-5 z-50">
        <Button 
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg" 
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 w-80 md:w-96">
      <Card className="shadow-xl border-primary/10">
        <CardHeader className="bg-primary text-white rounded-t-lg py-4 flex flex-row items-center justify-between">
          <CardTitle className="text-base font-medium">Minecore Group Chat</CardTitle>
          <Button 
            variant="ghost" 
            className="h-8 w-8 p-0 text-white hover:bg-primary/80" 
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="p-3 h-80 overflow-y-auto">
          <div className="space-y-3">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`rounded-lg py-2 px-3 max-w-[80%] ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isWaiting && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg py-2 px-3">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '200ms' }}></div>
                    <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '400ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </CardContent>
        <CardFooter className="py-2 px-3 bg-gray-50 rounded-b-lg">
          <form onSubmit={handleSubmit} className="w-full flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
              disabled={isWaiting}
            />
            <Button 
              type="submit" 
              disabled={!message.trim() || isWaiting}
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}