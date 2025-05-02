import { Request, Response } from 'express';
import axios from 'axios';

// Set up proxy to handle chat requests
export async function setupChatProxy(req: Request, res: Response) {
  try {
    // Return a simple chat HTML page
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chat with Minecore</title>
        <style>
          body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            overflow: hidden;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background-color: #f8f9fa;
          }
          
          .header {
            background-color: #4f46e5;
            color: white;
            padding: 12px 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 500;
          }
          
          .chat-container {
            display: flex;
            flex-direction: column;
            height: calc(100% - 48px);
            padding: 0;
            background-color: white;
          }
          
          .messages {
            flex: 1;
            overflow-y: auto;
            padding: 16px;
            display: flex;
            flex-direction: column;
          }
          
          .message {
            margin-bottom: 16px;
            max-width: 70%;
            padding: 10px 16px;
            border-radius: 18px;
            line-height: 1.4;
            position: relative;
            word-wrap: break-word;
          }
          
          .bot-message {
            align-self: flex-start;
            background-color: #f0f2f5;
            color: #000;
            border-bottom-left-radius: 4px;
          }
          
          .user-message {
            align-self: flex-end;
            background-color: #4f46e5;
            color: white;
            border-bottom-right-radius: 4px;
          }
          
          .input-area {
            border-top: 1px solid #e5e7eb;
            padding: 16px;
            display: flex;
            background-color: white;
          }
          
          .message-input {
            flex: 1;
            border: 1px solid #d1d5db;
            border-radius: 24px;
            padding: 12px 16px;
            margin-right: 8px;
            outline: none;
            font-size: 14px;
          }
          
          .message-input:focus {
            border-color: #4f46e5;
            box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
          }
          
          .send-button {
            background-color: #4f46e5;
            color: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.2s;
          }
          
          .send-button:hover {
            background-color: #4338ca;
          }
          
          .send-button:disabled {
            background-color: #9ca3af;
            cursor: not-allowed;
          }
          
          .typing-indicator {
            padding: 6px 12px;
            background-color: #f0f2f5;
            border-radius: 18px;
            width: fit-content;
            margin-bottom: 16px;
            align-self: flex-start;
            display: flex;
            align-items: center;
          }
          
          .typing-indicator span {
            height: 8px;
            width: 8px;
            background-color: #9ca3af;
            border-radius: 50%;
            display: inline-block;
            margin: 0 2px;
            opacity: 0.4;
          }
          
          .typing-indicator span:nth-child(1) {
            animation: pulse 1s infinite;
          }
          
          .typing-indicator span:nth-child(2) {
            animation: pulse 1s infinite 0.2s;
          }
          
          .typing-indicator span:nth-child(3) {
            animation: pulse 1s infinite 0.4s;
          }
          
          @keyframes pulse {
            0% { opacity: 0.4; }
            50% { opacity: 1; }
            100% { opacity: 0.4; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div>Chat with Minecore</div>
          <div id="close-button" style="cursor: pointer; font-size: 20px; font-weight: bold;">&times;</div>
        </div>
        
        <div class="chat-container">
          <div class="messages" id="messages">
            <div class="message bot-message">
              Hello! I'm Minecore's virtual assistant. How can I help you today?
            </div>
          </div>
          
          <div class="typing-indicator" id="typing-indicator" style="display: none;">
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <div class="input-area">
            <input type="text" class="message-input" id="message-input" placeholder="Type your message..." aria-label="Type your message">
            <button id="send-button" class="send-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
        
        <script>
          // DOM elements
          const messagesContainer = document.getElementById('messages');
          const messageInput = document.getElementById('message-input');
          const sendButton = document.getElementById('send-button');
          const typingIndicator = document.getElementById('typing-indicator');
          const closeButton = document.getElementById('close-button');
          
          // Predefined responses for the chat bot
          const responses = [
            "Thanks for reaching out! Our team specializes in AI automation solutions to help businesses save time and increase revenue.",
            "Minecore Group offers solutions for sales automation, marketing automation, and customer service automation. What area interests you most?",
            "Our starter automation package starts at just $500/month and can help you automate repetitive tasks, customer communications, and lead generation.",
            "We've helped businesses increase their revenue by 30% and save up to 20 hours per week through our automation services.",
            "Would you like to schedule a consultation call to discuss your specific business needs?",
            "Our team has over 20 years of experience in automation and digital transformation projects.",
            "You can learn more about our services at minecoregroup.com, or I can put you in touch with one of our specialists.",
            "We focus on making businesses more efficient so owners can make more money while working less - that's our core value proposition.",
            "Is there a specific business challenge you're trying to solve with automation?"
          ];
          
          // Context-specific responses based on user input
          const contextResponses = {
            pricing: [
              "Our pricing is designed to scale with your business. The starter automation package is $500/month, our accelerate package is $1,500/month, and our dominate package is $3,500/month.",
              "All our packages include ongoing support and maintenance of your automation workflows."
            ],
            sales: [
              "Our sales automation solutions help with lead scoring, automated follow-ups, pipeline management, and sales forecasting.",
              "Many of our clients have seen a 40% increase in sales team productivity after implementing our solutions."
            ],
            marketing: [
              "For marketing automation, we offer email campaign management, social media scheduling, lead nurturing, and analytics dashboards.",
              "Our marketing automation tools can help you generate more qualified leads while spending less time on repetitive tasks."
            ],
            consultation: [
              "I'd be happy to set up a consultation call with one of our specialists. What's the best email to reach you at?",
              "Great! Someone from our team will contact you within one business day to schedule your consultation."
            ]
          };
          
          // Function to add a message to the chat
          function addMessage(text, isUser = false) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
            messageDiv.textContent = text;
            messagesContainer.appendChild(messageDiv);
            // Scroll to the bottom
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
          }
          
          // Function to show the typing indicator
          function showTypingIndicator() {
            typingIndicator.style.display = 'flex';
            messagesContainer.appendChild(typingIndicator);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
          }
          
          // Function to hide the typing indicator
          function hideTypingIndicator() {
            typingIndicator.style.display = 'none';
          }
          
          // Determine if a message contains certain keywords
          function getResponseContext(message) {
            const lowerMessage = message.toLowerCase();
            
            if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('package') || lowerMessage.includes('plan')) {
              return 'pricing';
            } else if (lowerMessage.includes('sales') || lowerMessage.includes('lead') || lowerMessage.includes('customer') || lowerMessage.includes('client')) {
              return 'sales';
            } else if (lowerMessage.includes('marketing') || lowerMessage.includes('campaign') || lowerMessage.includes('email') || lowerMessage.includes('social')) {
              return 'marketing';
            } else if (lowerMessage.includes('call') || lowerMessage.includes('meeting') || lowerMessage.includes('talk') || lowerMessage.includes('consultation')) {
              return 'consultation';
            }
            
            return null;
          }
          
          // Function to get a bot response
          function getBotResponse(userMessage) {
            // Check for context-specific response
            const context = getResponseContext(userMessage);
            if (context && contextResponses[context]) {
              const contextResponseList = contextResponses[context];
              return contextResponseList[Math.floor(Math.random() * contextResponseList.length)];
            }
            
            // Default to random response
            return responses[Math.floor(Math.random() * responses.length)];
          }
          
          // Function to simulate a bot response
          function simulateBotResponse(userMessage) {
            showTypingIndicator();
            
            // Random response delay between 1-3 seconds
            const delay = Math.floor(Math.random() * 2000) + 1000;
            
            setTimeout(() => {
              hideTypingIndicator();
              
              // Get a response based on user message
              const botResponse = getBotResponse(userMessage);
              addMessage(botResponse, false);
              
              // Re-enable the input and button
              messageInput.disabled = false;
              sendButton.disabled = false;
              messageInput.focus();
            }, delay);
          }
          
          // Handle send button click
          sendButton.addEventListener('click', function() {
            sendMessage();
          });
          
          // Handle Enter key press in input
          messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
              sendMessage();
            }
          });
          
          // Function to send a message
          function sendMessage() {
            const message = messageInput.value.trim();
            if (message) {
              // Add user message to chat
              addMessage(message, true);
              
              // Clear input
              messageInput.value = '';
              
              // Disable input and button while "bot is typing"
              messageInput.disabled = true;
              sendButton.disabled = true;
              
              // Simulate bot response
              simulateBotResponse(message);
            }
          }
          
          // Close chat when clicking the close button
          closeButton.addEventListener('click', function() {
            window.parent.postMessage('close-chat', '*');
          });
          
          // Focus the input field when the chat loads
          messageInput.focus();
        </script>
      </body>
      </html>
    `;

    // Set the appropriate headers
    res.set({
      'Content-Type': 'text/html',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });

    // Return the HTML content
    res.send(htmlContent);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).send('Error loading chat interface');
  }
}