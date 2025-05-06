// Self-contained chat widget implementation
// Debug flag to help troubleshoot
window.__n8nChatWidgetLoaded = false;

// Initialize widget function - will be called by multiple events to ensure it runs
function initializeChatWidget() {
  // Prevent multiple initializations
  if (window.__n8nChatWidgetLoaded) {
    console.log("N8n Chat Widget: Already initialized, skipping");
    return;
  }
  
  console.log("N8n Chat Widget: Starting initialization");
  window.__n8nChatWidgetLoaded = true;
  console.log("N8n Chat Widget: DOM fully loaded, initializing widget...");
  
  // Add CSP meta tag to allow external sources
  try {
    const meta = document.createElement('meta');
    meta.httpEquiv = "Content-Security-Policy";
    meta.content = "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;";
    document.head.appendChild(meta);
    console.log("N8n Chat Widget: Added CSP meta tag");
  } catch (e) {
    console.warn("N8n Chat Widget: Couldn't add CSP meta tag:", e);
  }
  // Create the chat widget container
  const widget = document.createElement('div');
  widget.id = 'n8n-chat-widget';
  widget.innerHTML = `
    <button id="n8n-chat-button" aria-label="Chat with us">
      <span class="bubble">👋</span>
      <span class="sr-only">Chat with us</span>
    </button>
    <div id="n8n-chat-container" class="hidden">
      <div id="n8n-chat-header">
        <div id="n8n-chat-header-brand">
          <img id="n8n-chat-logo" src="https://minecoregroup.com/logo-social.png" alt="Minecore Group Logo">
          <div id="n8n-chat-header-text">
            <h3>Minecore Group</h3>
            <p>We typically respond right away</p>
          </div>
        </div>
        <button id="n8n-chat-close" aria-label="Close chat">&times;</button>
      </div>
      <div id="n8n-chat-messages">
        <div class="n8n-chat-message bot">
          <div class="n8n-chat-message-content">
            <p>Hi 👋, how can we help?</p>
          </div>
        </div>
      </div>
      <div id="n8n-chat-input-container">
        <textarea id="n8n-chat-input" placeholder="Type your message..." rows="1"></textarea>
        <button id="n8n-chat-send" aria-label="Send message">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(widget);

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    #n8n-chat-widget {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 10000;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    
    #n8n-chat-button {
      width: 60px;
      height: 60px;
      border-radius: 30px;
      background-color: #854fff;
      border: none;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
    }
    
    #n8n-chat-button:hover {
      background-color: #6b3fd4;
      transform: scale(1.05);
    }
    
    #n8n-chat-button .bubble {
      font-size: 24px;
      color: white;
    }
    
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
    
    #n8n-chat-container {
      position: absolute;
      bottom: 80px;
      right: 0;
      width: 350px;
      height: 500px;
      background-color: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    
    #n8n-chat-container.hidden {
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
    }
    
    #n8n-chat-header {
      background-color: #854fff;
      color: white;
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    #n8n-chat-header-brand {
      display: flex;
      align-items: center;
    }
    
    #n8n-chat-logo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
      object-fit: cover;
    }
    
    #n8n-chat-header-text h3 {
      margin: 0;
      font-size: 16px;
    }
    
    #n8n-chat-header-text p {
      margin: 3px 0 0;
      font-size: 12px;
      opacity: 0.8;
    }
    
    #n8n-chat-close {
      background: none;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
    }
    
    #n8n-chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 15px;
    }
    
    .n8n-chat-message {
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
    }
    
    .n8n-chat-message.user {
      align-items: flex-end;
    }
    
    .n8n-chat-message.bot {
      align-items: flex-start;
    }
    
    .n8n-chat-message-content {
      max-width: 80%;
      padding: 10px 15px;
      border-radius: 18px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
    
    .n8n-chat-message.user .n8n-chat-message-content {
      background-color: #854fff;
      color: white;
      border-bottom-right-radius: 4px;
    }
    
    .n8n-chat-message.bot .n8n-chat-message-content {
      background-color: #f0f0f0;
      color: #333;
      border-bottom-left-radius: 4px;
    }
    
    .n8n-chat-message-content p {
      margin: 0;
    }
    
    #n8n-chat-input-container {
      padding: 15px;
      border-top: 1px solid #eee;
      display: flex;
      align-items: center;
    }
    
    #n8n-chat-input {
      flex: 1;
      border: 1px solid #ddd;
      border-radius: 20px;
      padding: 10px 15px;
      outline: none;
      resize: none;
      font-family: inherit;
      font-size: 14px;
    }
    
    #n8n-chat-input:focus {
      border-color: #854fff;
    }
    
    #n8n-chat-send {
      background: none;
      border: none;
      color: #854fff;
      margin-left: 10px;
      cursor: pointer;
      padding: 5px;
    }
    
    #n8n-chat-send svg {
      width: 20px;
      height: 20px;
    }
  `;
  document.head.appendChild(style);

  // Chat functionality
  const button = document.getElementById('n8n-chat-button');
  const container = document.getElementById('n8n-chat-container');
  const closeBtn = document.getElementById('n8n-chat-close');
  const input = document.getElementById('n8n-chat-input');
  const sendBtn = document.getElementById('n8n-chat-send');
  const messagesContainer = document.getElementById('n8n-chat-messages');

  // Show/hide chat
  button.addEventListener('click', () => {
    container.classList.toggle('hidden');
    if (!container.classList.contains('hidden')) {
      input.focus();
    }
  });

  closeBtn.addEventListener('click', () => {
    container.classList.add('hidden');
  });

  // Handle sending messages
  const sendMessage = () => {
    const message = input.value.trim();
    if (!message) return;

    // Add user message to chat
    appendMessage(message, 'user');
    
    // Clear input
    input.value = '';
    
    // Send to n8n webhook
    fetch('https://n8n.nccio.co.uk/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        message: message,
        route: 'general',
        meta: {
          url: window.location.href,
          userAgent: navigator.userAgent
        }
      }),
    })
    .then(response => response.json())
    .then(data => {
      // Add bot response to chat
      if (data && data.message) {
        appendMessage(data.message, 'bot');
      } else {
        appendMessage("Thanks for your message! We'll be in touch soon.", 'bot');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      appendMessage("Sorry, there was an error sending your message. Please try again later.", 'bot');
    });
  };

  const appendMessage = (content, sender) => {
    const messageDiv = document.createElement('div');
    messageDiv.className = `n8n-chat-message ${sender}`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'n8n-chat-message-content';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = content;
    
    messageContent.appendChild(paragraph);
    messageDiv.appendChild(messageContent);
    messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  sendBtn.addEventListener('click', sendMessage);
  
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Make textarea auto-resize
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = (input.scrollHeight < 150 ? input.scrollHeight : 150) + 'px';
  });
  
  console.log("N8n Chat Widget: Initialization complete");
}

// Try multiple initialization strategies to ensure the widget loads
// 1. DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
  console.log("N8n Chat Widget: DOMContentLoaded fired");
  setTimeout(initializeChatWidget, 100); // Small delay to ensure DOM is fully ready
});

// 2. Window load event (backup)
window.addEventListener('load', function() {
  console.log("N8n Chat Widget: Window load event fired");
  setTimeout(initializeChatWidget, 500); // Small delay for any final DOM changes
});

// 3. Immediate execution with setTimeout (final backup)
setTimeout(function() {
  console.log("N8n Chat Widget: Delayed initialization attempt");
  initializeChatWidget();
}, 1500);

// 4. Initial immediate execution attempt
console.log("N8n Chat Widget: Script loaded, attempting immediate initialization");
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(initializeChatWidget, 10);
}