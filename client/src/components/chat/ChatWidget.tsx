import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  type: 'system' | 'user' | 'support';
  message: string;
  timestamp: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [ws, setWs] = useState<WebSocket | null>(null);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout>();

  const connectWebSocket = () => {
    try {
      const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      const wsUrl = `${protocol}//${window.location.host}/ws`;
      console.log('Attempting to connect to:', wsUrl);

      const socket = new WebSocket(wsUrl);

      socket.onopen = () => {
        console.log('Connected to chat server');
        toast({
          title: "Connected",
          description: "Chat support is now available.",
        });
      };

      socket.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          console.log('Received message:', message);
          setMessages((prev) => [...prev, message]);
        } catch (error) {
          console.error('Error parsing message:', error);
        }
      };

      socket.onclose = () => {
        console.log('Disconnected from chat server');
        setWs(null);

        // Attempt to reconnect after 3 seconds
        reconnectTimeoutRef.current = setTimeout(() => {
          if (isOpen) {
            console.log('Attempting to reconnect...');
            connectWebSocket();
          }
        }, 3000);
      };

      socket.onerror = (error) => {
        console.error('WebSocket error:', error);
        toast({
          title: "Connection Error",
          description: "Failed to connect to chat server. Retrying...",
          variant: "destructive",
        });
      };

      setWs(socket);
    } catch (error) {
      console.error('Error creating WebSocket:', error);
    }
  };

  useEffect(() => {
    if (isOpen && !ws) {
      connectWebSocket();
    }

    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (ws) {
        ws.close();
      }
    };
  }, [isOpen, ws]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!inputMessage.trim() || !ws) return;

    try {
      const message = {
        type: 'user',
        message: inputMessage,
      };

      console.log('Sending message:', message);
      ws.send(JSON.stringify(message));
      setInputMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button size="icon" className="h-12 w-12 rounded-full">
            <MessageCircle className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[80vh]">
          <DrawerHeader>
            <DrawerTitle>Live Chat Support</DrawerTitle>
          </DrawerHeader>
          <Card className="flex h-full flex-col border-0 shadow-none">
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      msg.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : msg.type === 'system'
                        ? 'bg-muted text-muted-foreground'
                        : 'bg-accent text-accent-foreground'
                    }`}
                  >
                    <p>{msg.message}</p>
                    <span className="text-xs opacity-70">
                      {new Date(msg.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="flex w-full gap-2">
                <Input
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <Button size="icon" onClick={sendMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </DrawerContent>
      </Drawer>
    </div>
  );
}