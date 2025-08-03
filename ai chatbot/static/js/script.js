// DOM Elements
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

// Utility Functions
function getTimestamp() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Message Functions
async function sendMessage() {
    const messageText = userInput.value.trim();
    if (messageText === '') return;

    appendMessage(messageText, 'user-message');
    userInput.value = '';
    userInput.focus();
    sendButton.disabled = true;
    showTypingIndicator();

    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: messageText })
        });

        removeTypingIndicator();
        sendButton.disabled = false;
        const data = await response.json();
        appendMessage(data.response, 'bot-message');
    } catch (error) {
        removeTypingIndicator();
        sendButton.disabled = false;
        console.error('Error:', error);
        appendMessage('Sorry, something went wrong. Please try again.', 'bot-message');
    }
}

function appendMessage(text, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    
    // Handle line breaks in the text
    const formattedText = text.replace(/\n/g, '<br>');
    messageElement.innerHTML = formattedText;
    
    const timestamp = document.createElement('span');
    timestamp.className = 'timestamp';
    timestamp.textContent = getTimestamp();
    messageElement.appendChild(timestamp);
    
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function showTypingIndicator() {
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('typing-indicator');
    typingIndicator.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    chatbox.appendChild(typingIndicator);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicator = document.querySelector('.typing-indicator');
    if (typingIndicator) {
        chatbox.removeChild(typingIndicator);
    }
}

// Event Listeners
sendButton.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set timestamp for initial bot message
    const initialMessage = document.querySelector('.bot-message .timestamp');
    if (initialMessage) {
        initialMessage.textContent = getTimestamp();
    }

    // Focus on input when page loads
    userInput.focus();
}); 