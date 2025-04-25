import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { MessageCircle, Send, X, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";

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
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout>();
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");

  const connectWebSocket = () => {
    try {
      setIsConnecting(true);
      const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      const wsUrl = `${protocol}//${window.location.host}/ws/chat`;
      console.log('Attempting to connect to:', wsUrl);

      const socket = new WebSocket(wsUrl);

      socket.onopen = () => {
        console.log('Connected to chat server');
        setIsConnecting(false);
        toast({
          title: isPathFrench ? "Connecté" : "Connected",
          description: isPathFrench 
            ? "Le support par chat est maintenant disponible." 
            : "Chat support is now available.",
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
        setIsConnecting(false);

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
        setIsConnecting(false);
        toast({
          title: isPathFrench ? "Erreur de Connexion" : "Connection Error",
          description: isPathFrench
            ? "Échec de la connexion au serveur de chat. Réessai en cours..."
            : "Failed to connect to chat server. Retrying...",
          variant: "destructive",
        });
      };

      setWs(socket);
    } catch (error) {
      console.error('Error creating WebSocket:', error);
      setIsConnecting(false);
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Button size="icon" className="h-14 w-14 rounded-full shadow-lg">
              <MessageCircle className="h-7 w-7" />
            </Button>
            {!isOpen && (
              <Badge className="absolute -top-2 -right-2 px-2 py-1 text-xs font-semibold bg-primary text-primary-foreground">
                {isPathFrench ? "Assistance" : "Chat"}
              </Badge>
            )}
          </motion.div>
        </DrawerTrigger>
        <DrawerContent className="h-[80vh]">
          <DrawerHeader className="border-b px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border-2 border-primary/20">
                <AvatarImage src="/logo.svg" alt="Minecore Support" />
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">MG</AvatarFallback>
              </Avatar>
              <div>
                <DrawerTitle className="text-lg">
                  {isPathFrench ? "Support en Direct" : "Live Chat Support"}
                </DrawerTitle>
                <p className="text-sm text-muted-foreground">
                  {isPathFrench 
                    ? "Un assistant est prêt à vous aider" 
                    : "An assistant is ready to help you"}
                </p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)} 
              className="rounded-full h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </DrawerHeader>
          
          <Card className="flex h-full flex-col border-0 shadow-none">
            <CardContent className="flex-1 overflow-y-auto p-6 space-y-6">
              <AnimatePresence>
                {messages.length === 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-32 text-center p-6"
                  >
                    <div className="bg-primary/10 p-3 rounded-full mb-4">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-muted-foreground mb-2">
                      {isPathFrench 
                        ? "Bienvenue dans notre chat d'assistance" 
                        : "Welcome to our support chat"}
                    </p>
                    <p className="text-sm text-muted-foreground/80">
                      {isPathFrench 
                        ? "Comment pouvons-nous vous aider aujourd'hui?" 
                        : "How can we help you today?"}
                    </p>
                  </motion.div>
                )}
                
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.type !== 'user' && (
                      <Avatar className="h-8 w-8 mr-2 mt-1 flex-shrink-0">
                        <AvatarFallback className={msg.type === 'system' ? 'bg-muted text-muted-foreground' : 'bg-primary/10 text-primary'}>
                          {msg.type === 'system' ? 'SYS' : 'MG'}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    
                    <div
                      className={`rounded-lg px-4 py-3 max-w-[75%] shadow-sm ${
                        msg.type === 'user'
                          ? 'bg-primary text-primary-foreground rounded-tr-none'
                          : msg.type === 'system'
                          ? 'bg-muted text-muted-foreground rounded-tl-none'
                          : 'bg-primary/10 text-foreground rounded-tl-none'
                      }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    
                    {msg.type === 'user' && (
                      <Avatar className="h-8 w-8 ml-2 mt-1 flex-shrink-0">
                        <AvatarFallback className="bg-secondary text-secondary-foreground">
                          {isPathFrench ? 'V' : 'Y'}
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
                
                {isConnecting && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center p-4"
                  >
                    <Loader2 className="h-5 w-5 text-muted-foreground animate-spin mr-2" />
                    <span className="text-sm text-muted-foreground">
                      {isPathFrench ? "Connexion en cours..." : "Connecting..."}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
            
            <CardFooter className="border-t p-4">
              <div className="flex w-full gap-2">
                <Input
                  placeholder={isPathFrench ? "Tapez votre message..." : "Type your message..."}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="border-primary/20 focus:border-primary"
                  disabled={!ws || isConnecting}
                />
                <Button 
                  size="icon" 
                  onClick={sendMessage} 
                  disabled={!ws || isConnecting || !inputMessage.trim()}
                >
                  {isConnecting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardFooter>
          </Card>
        </DrawerContent>
      </Drawer>
    </div>
  );
}