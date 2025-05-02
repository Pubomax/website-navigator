import { Request, Response } from 'express';
import axios from 'axios';

// Set up proxy to handle chat requests
export async function setupChatProxy(req: Request, res: Response) {
  try {
    // Return a lead-focused chat HTML page
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
          
          /* Lead form styles */
          .lead-form {
            display: none;
            flex-direction: column;
            padding: 16px;
            background-color: white;
            border-top: 1px solid #e5e7eb;
          }
          
          .form-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 12px;
            color: #111827;
          }
          
          .form-group {
            margin-bottom: 12px;
          }
          
          .form-label {
            display: block;
            margin-bottom: 4px;
            font-size: 14px;
            color: #374151;
          }
          
          .form-input {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            outline: none;
            font-size: 14px;
          }
          
          .form-input:focus {
            border-color: #4f46e5;
            box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
          }
          
          .form-input.error {
            border-color: #ef4444;
          }
          
          .form-error {
            color: #ef4444;
            font-size: 12px;
            margin-top: 2px;
          }
          
          .submit-button {
            background-color: #4f46e5;
            color: white;
            border: none;
            border-radius: 6px;
            padding: 10px 16px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
          }
          
          .submit-button:hover {
            background-color: #4338ca;
          }
          
          .submit-button:disabled {
            background-color: #9ca3af;
            cursor: not-allowed;
          }
          
          .n8n-container {
            display: none;
            height: 100%;
            width: 100%;
            position: relative;
          }
          
          #loading-indicator {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
          }
          
          .loader {
            display: inline-block;
            width: 40px;
            height: 40px;
            border: 4px solid rgba(79, 70, 229, 0.2);
            border-radius: 50%;
            border-top-color: #4f46e5;
            animation: spin 1s ease-in-out infinite;
            margin-bottom: 16px;
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0% { opacity: 0.4; }
            50% { opacity: 1; }
            100% { opacity: 0.4; }
          }
        </style>
        <link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet" />
      </head>
      <body>
        <div class="header">
          <div>Chat with Minecore</div>
          <div id="close-button" style="cursor: pointer; font-size: 20px; font-weight: bold;">&times;</div>
        </div>
        
        <!-- Our custom chat interface -->
        <div class="chat-container" id="custom-chat">
          <div class="messages" id="messages">
            <div class="message bot-message">
              👋 Hi there! I'm the Minecore assistant. Want to save time and make more money with AI automation? I can help you get started with our $500/month starter package.
            </div>
          </div>
          
          <div class="typing-indicator" id="typing-indicator" style="display: none;">
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <div class="input-area" id="chat-input-area">
            <input type="text" class="message-input" id="message-input" placeholder="Type your message..." aria-label="Type your message">
            <button id="send-button" class="send-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
          
          <!-- Lead capture form -->
          <div class="lead-form" id="lead-form">
            <div class="form-title">Great! Let's schedule your free consultation</div>
            <div class="form-group">
              <label for="name" class="form-label">Your Name</label>
              <input type="text" id="name" class="form-input" placeholder="John Smith">
              <div class="form-error" id="name-error"></div>
            </div>
            <div class="form-group">
              <label for="email" class="form-label">Email Address</label>
              <input type="email" id="email" class="form-input" placeholder="john@example.com">
              <div class="form-error" id="email-error"></div>
            </div>
            <div class="form-group">
              <label for="phone" class="form-label">Phone Number</label>
              <input type="tel" id="phone" class="form-input" placeholder="(555) 123-4567">
              <div class="form-error" id="phone-error"></div>
            </div>
            <div class="form-group">
              <label for="company" class="form-label">Company Name</label>
              <input type="text" id="company" class="form-input" placeholder="Acme Inc.">
              <div class="form-error" id="company-error"></div>
            </div>
            <div class="form-group">
              <label for="interest" class="form-label">What interests you most?</label>
              <select id="interest" class="form-input">
                <option value="sales">Sales Automation</option>
                <option value="marketing">Marketing Automation</option>
                <option value="customer-service">Customer Service Automation</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button id="submit-lead" class="submit-button">Schedule My Consultation</button>
          </div>
        </div>
        
        <!-- n8n chat container (will attempt to load) -->
        <div id="n8n-container" class="n8n-container">
          <div id="n8n-chat-target"></div>
          <div id="loading-indicator">
            <div class="loader"></div>
            <div>Connecting to chat service...</div>
          </div>
        </div>
        
        <script>
          // DOM elements for our custom chat
          const customChat = document.getElementById('custom-chat');
          const messagesContainer = document.getElementById('messages');
          const messageInput = document.getElementById('message-input');
          const sendButton = document.getElementById('send-button');
          const typingIndicator = document.getElementById('typing-indicator');
          const closeButton = document.getElementById('close-button');
          const chatInputArea = document.getElementById('chat-input-area');
          const leadForm = document.getElementById('lead-form');
          
          // DOM elements for n8n integration
          const n8nContainer = document.getElementById('n8n-container');
          const loadingIndicator = document.getElementById('loading-indicator');
          
          // Lead form elements
          const nameInput = document.getElementById('name');
          const emailInput = document.getElementById('email');
          const phoneInput = document.getElementById('phone');
          const companyInput = document.getElementById('company');
          const interestSelect = document.getElementById('interest');
          const submitLeadButton = document.getElementById('submit-lead');
          
          // Flag to track if the lead form has been shown
          let leadFormShown = false;
          
          // Track conversation steps
          let conversationStep = 0;
          let userName = '';
          
          // Sequence of messages to encourage lead generation
          const conversationFlow = [
            "What type of business do you run? I can help recommend the best automation solutions based on your industry.",
            "What's your biggest time-consuming challenge at work? Many businesses spend too much time on repetitive tasks that can be automated.",
            "Would you be interested in seeing a free demo of how our automation solutions could save you time and increase your revenue?",
            "Great! Could you share your name so I can personalize our conversation?",
            "Thanks, {name}! To set up your free consultation, we just need a few details to understand your needs better."
          ];
          
          // Specific trigger phrases that should immediately show the lead form
          const leadTriggers = [
            'yes',
            'sure',
            'interested',
            'tell me more',
            'consultation',
            'demo',
            'more information',
            'contact',
            'talk',
            'call'
          ];
          
          // Function to check if user's message contains any lead triggers
          function containsLeadTrigger(message) {
            const lowerMessage = message.toLowerCase();
            return leadTriggers.some(trigger => lowerMessage.includes(trigger));
          }
          
          // Function to add a message to the chat
          function addMessage(text, isUser = false) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
            
            // Replace {name} placeholder with actual name if provided
            if (userName && !isUser) {
              text = text.replace('{name}', userName);
            }
            
            messageDiv.textContent = text;
            messagesContainer.appendChild(messageDiv);
            // Scroll to the bottom
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            
            // If we've reached the name question and this is a user message, save their name
            if (conversationStep === 3 && isUser && !userName) {
              userName = text.trim();
            }
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
          
          // Function to get the next bot message in the conversation flow
          function getNextBotMessage() {
            if (conversationStep < conversationFlow.length) {
              return conversationFlow[conversationStep++];
            }
            
            // If we've gone through all steps, show lead form
            showLeadForm();
            return null;
          }
          
          // Function to show the lead form
          function showLeadForm() {
            if (!leadFormShown) {
              leadFormShown = true;
              chatInputArea.style.display = 'none';
              leadForm.style.display = 'flex';
              addMessage("Please fill out the form below to schedule your free consultation.", false);
            }
          }
          
          // Function to handle bot response
          function botResponse(userMessage) {
            showTypingIndicator();
            
            // Check if the user message contains a lead trigger phrase
            if (containsLeadTrigger(userMessage)) {
              // If it's a trigger phrase, expedite to the lead form
              setTimeout(() => {
                hideTypingIndicator();
                addMessage("That's great! I'd be happy to help you get started right away.", false);
                
                // Ask for name first if we don't have it
                if (!userName) {
                  setTimeout(() => {
                    addMessage("To personalize our conversation, could you please tell me your name?", false);
                    conversationStep = 3; // Set to the name question step
                  }, 1000);
                } else {
                  // If we already have the name, show the lead form
                  setTimeout(() => {
                    showLeadForm();
                  }, 1000);
                }
              }, 1000);
              return;
            }
            
            // Random response delay between 1-2 seconds
            const delay = Math.floor(Math.random() * 1000) + 1000;
            
            setTimeout(() => {
              hideTypingIndicator();
              
              // Get the next message in our conversation flow
              const botMessage = getNextBotMessage();
              if (botMessage) {
                addMessage(botMessage, false);
              }
              
              // Re-enable the input and button
              messageInput.disabled = false;
              sendButton.disabled = false;
              messageInput.focus();
            }, delay);
          }
          
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
              
              // Process bot response
              botResponse(message);
            }
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
          
          // Form validation
          function validateForm() {
            let isValid = true;
            
            // Validate name
            if (!nameInput.value.trim()) {
              document.getElementById('name-error').textContent = 'Please enter your name';
              nameInput.classList.add('error');
              isValid = false;
            } else {
              document.getElementById('name-error').textContent = '';
              nameInput.classList.remove('error');
            }
            
            // Validate email
            const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
              document.getElementById('email-error').textContent = 'Please enter a valid email address';
              emailInput.classList.add('error');
              isValid = false;
            } else {
              document.getElementById('email-error').textContent = '';
              emailInput.classList.remove('error');
            }
            
            // Validate phone (optional but if entered, must be valid)
            if (phoneInput.value.trim()) {
              const phoneRegex = /^[\\d\\s\\(\\)\\-\\+]+$/;
              if (!phoneRegex.test(phoneInput.value.trim())) {
                document.getElementById('phone-error').textContent = 'Please enter a valid phone number';
                phoneInput.classList.add('error');
                isValid = false;
              } else {
                document.getElementById('phone-error').textContent = '';
                phoneInput.classList.remove('error');
              }
            }
            
            return isValid;
          }
          
          // Handle lead form submission
          submitLeadButton.addEventListener('click', function() {
            if (validateForm()) {
              // Show processing state
              submitLeadButton.disabled = true;
              submitLeadButton.textContent = 'Processing...';
              
              // Collect form data
              const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                phone: phoneInput.value.trim(),
                company: companyInput.value.trim(),
                interest: interestSelect.value
              };
              
              // Post data to server
              fetch('/api/lead-capture', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
              })
              .then(response => response.json())
              .then(data => {
                // Hide the form
                leadForm.style.display = 'none';
                
                // Show success message
                addMessage("Thank you for your interest! One of our automation specialists will contact you within 24 hours to schedule your free consultation. In the meantime, feel free to explore our website for more information.", false);
              })
              .catch(error => {
                console.error('Error submitting lead:', error);
                submitLeadButton.disabled = false;
                submitLeadButton.textContent = 'Schedule My Consultation';
                addMessage("I apologize, but we encountered an issue processing your request. Please try again or contact us directly at hello@minecoregroup.com", false);
              });
            }
          });
          
          // Try to load n8n chat
          let n8nAvailable = false;
          
          function loadN8nChat() {
            // First check if n8n is available
            fetch('https://n8n.srv793146.hstgr.cloud/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat', {
              method: 'GET',
              mode: 'no-cors'
            })
            .then(() => {
              try {
                // Import the n8n chat module
                import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js')
                  .then(module => {
                    const { createChat } = module;
                    
                    // Create the chat with the webhook URL
                    createChat({
                      webhookUrl: 'https://n8n.srv793146.hstgr.cloud/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat',
                      webhookConfig: {
                        method: 'POST',
                        headers: { 'Authorization': 'Bearer YOUR_TOKEN' }
                      },
                      targetElement: '#n8n-chat-target'
                    })
                    .then(() => {
                      console.log('n8n chat loaded successfully');
                      n8nAvailable = true;
                      loadingIndicator.style.display = 'none';
                      
                      // Show the n8n chat interface, hide our custom chat
                      customChat.style.display = 'none';
                      n8nContainer.style.display = 'block';
                    })
                    .catch(error => {
                      console.error('Failed to initialize n8n chat:', error);
                    });
                  })
                  .catch(error => {
                    console.error('Error importing n8n chat module:', error);
                  });
              } catch (error) {
                console.error('Error setting up n8n chat:', error);
              }
            })
            .catch(error => {
              console.error('n8n endpoint not available:', error);
            });
            
            // Timeout to fall back to our custom chat if n8n doesn't load
            setTimeout(() => {
              if (!n8nAvailable) {
                // Make sure our custom chat is visible
                customChat.style.display = 'flex';
                n8nContainer.style.display = 'none';
              }
            }, 3000);
          }
          
          // Close chat when clicking the close button
          closeButton.addEventListener('click', function() {
            window.parent.postMessage('close-chat', '*');
          });
          
          // Initialize the chat interface
          function initChat() {
            // Try to load n8n chat first
            loadN8nChat();
            
            // Make sure our custom chat is visible initially
            customChat.style.display = 'flex';
            n8nContainer.style.display = 'none';
            
            // Focus the input field when the chat loads
            messageInput.focus();
          }
          
          // Start the chat
          initChat();
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