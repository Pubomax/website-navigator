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
          
          .loader {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 2px solid rgba(255,255,255,.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s ease-in-out infinite;
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
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
              Hello! I'm Minecore's AI assistant. How can I help you automate your business processes today?
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
          const messagesContainer = document.getElementById('messages');
          const messageInput = document.getElementById('message-input');
          const sendButton = document.getElementById('send-button');
          const typingIndicator = document.getElementById('typing-indicator');
          const closeButton = document.getElementById('close-button');
          
          // Mock responses for a basic chat experience
          const responses = [
            "I'd be happy to help you set up automation for your business. Could you tell me more about what processes you'd like to automate?",
            "Minecore Group specializes in AI Automation solutions that can help your business save time and increase revenue.",
            "Our starter automation package is just $500/month and can help you automate customer communications and lead generation.",
            "We offer solutions for sales automation, marketing automation, and customer service automation.",
            "Would you like to schedule a consultation call to discuss your specific needs?",
            "You can learn more about our services at minecoregroup.com or by calling us at 514-603-0598.",
            "Our team has over 20 years of experience helping businesses like yours increase efficiency through automation."
          ];
          
          // Function to add a message to the chat
          function addMessage(text, isUser = false) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
            messageDiv.textContent = text;
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
          }
          
          // Function to show the typing indicator
          function showTypingIndicator() {
            typingIndicator.style.display = 'flex';
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
          }
          
          // Function to hide the typing indicator
          function hideTypingIndicator() {
            typingIndicator.style.display = 'none';
          }
          
          // Function to simulate a bot response
          function simulateBotResponse() {
            showTypingIndicator();
            
            // Random response delay between 1-3 seconds
            const delay = Math.floor(Math.random() * 2000) + 1000;
            
            setTimeout(() => {
              hideTypingIndicator();
              
              // Get a random response
              const randomIndex = Math.floor(Math.random() * responses.length);
              addMessage(responses[randomIndex], false);
              
              // Enable the input and button
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
              simulateBotResponse();
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