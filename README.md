# AI Assistant Chatbot

A modern, responsive AI chatbot built with Flask and Google's Gemini AI. Features a beautiful UI with real-time conversation capabilities.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Real-time Chat**: Instant responses with typing indicators
- **AI-Powered**: Uses Google's Gemini 2.0 Flash model
- **Conversation Memory**: Maintains chat context across messages
- **Professional Design**: Glass morphism effects and modern styling
- **Mobile Responsive**: Works perfectly on all devices

## 🛠️ Technologies Used

- **Backend**: Python Flask
- **AI Model**: Google Gemini 2.0 Flash
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with modern design patterns
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Poppins)

## 📁 Project Structure

```
ai-chatbot/
├── app.py                 # Flask backend application
├── requirements.txt       # Python dependencies
├── README.md             # Project documentation
├── templates/
│   └── index.html        # Main HTML template
└── static/
    ├── css/
    │   └── style.css     # All CSS styles
    └── js/
        └── script.js     # JavaScript functionality
```

## 🚀 Installation & Setup

### Prerequisites
- Python 3.7 or higher
- pip (Python package installer)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-chatbot
   ```

2. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up your API key**
   - Get a Google Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Replace the API key in `app.py`:
   ```python
   API_KEY = "your-gemini-api-key-here"
   ```

4. **Run the application**
   ```bash
   python app.py
   ```

5. **Open your browser**
   - Navigate to `http://127.0.0.1:5000`
   - Start chatting with the AI assistant!

## 🎨 Features Breakdown

### Frontend Features
- **Responsive Design**: Adapts to different screen sizes
- **Modern UI**: Glass morphism effects and gradients
- **Smooth Animations**: Fade-in effects for messages
- **Typing Indicators**: Visual feedback during AI processing
- **Message Timestamps**: Shows when messages were sent
- **Professional Styling**: Clean, modern interface

### Backend Features
- **Flask Web Framework**: Lightweight and efficient
- **Gemini AI Integration**: Advanced language model
- **Conversation Memory**: Maintains chat context
- **Error Handling**: Graceful error management
- **RESTful API**: Clean API endpoints

## 🔧 Configuration

### Environment Variables
For production, consider using environment variables for the API key:

```python
import os
API_KEY = os.getenv('GEMINI_API_KEY', 'your-default-key')
```

### Customization
- **Colors**: Modify the CSS variables in `static/css/style.css`
- **Styling**: Update the design in the CSS file
- **Functionality**: Extend features in `static/js/script.js`

## 📱 Responsive Design

The chatbot is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Different screen orientations

## 🔒 Security Considerations

- API keys should be kept secure and not committed to version control
- Consider implementing rate limiting for production use
- Add input validation for user messages
- Implement proper error handling

## 🚀 Deployment

### Local Development
```bash
python app.py
```

### Production Deployment
For production deployment, consider:
- Using a WSGI server like Gunicorn
- Setting up environment variables
- Implementing proper logging
- Adding monitoring and analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Google Gemini AI for providing the language model
- Font Awesome for the beautiful icons
- Google Fonts for the Poppins font family

## 📞 Support

If you have any questions or need help, feel free to open an issue on GitHub.

---

**Happy Chatting! 🤖✨** 
