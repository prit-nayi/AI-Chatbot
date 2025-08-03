from flask import Flask, render_template, request, jsonify
import google.generativeai as genai

app = Flask(__name__)

# Configure Gemini AI
API_KEY = "your-gemini-api-key-here"


genai.configure(api_key=API_KEY)

# Initialize the model
model = genai.GenerativeModel("gemini-2.0-flash")

# Start a chat session to maintain conversation history
chat_session = model.start_chat(history=[])

def get_bot_response(user_input):
    """Gets a response from the AI assistant based on user input."""
    try:
        # Use the chat session to maintain conversation history
        response = chat_session.send_message(user_input)
        return response.text
    except Exception as e:
        print(f"Error generating response: {e}")
        return "I apologize, but I'm having trouble processing your request right now. Please try again in a moment."

@app.route('/')
def index():
    """Renders the main chat page."""
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    """Handles chat messages from the user."""
    user_input = request.json.get("message")
    if not user_input:
        return jsonify({"error": "No message provided"}), 400
    
    bot_response = get_bot_response(user_input)
    return jsonify({"response": bot_response})

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)