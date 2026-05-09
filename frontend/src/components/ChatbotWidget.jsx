import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './ChatbotWidget.css';

const ChatbotWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    "Which stream after 10th?",
    "How to prepare for JEE?",
    "Best careers for Commerce students?",
    "Which colleges for B.Tech?"
  ];

  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      setMessages([{
        sender: 'bot',
        text: "Hi! I am **CareerBot** 👋\n\nAsk me anything about:\n• **Career choices**\n• **Stream selection** (Science/Commerce/Arts)\n• **Entrance exams** (JEE, NEET, CUET)\n• **College recommendations**",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }
  }, [isChatOpen, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = async (messageText) => {
    if (!messageText.trim()) return;

    const userMessage = {
      sender: 'user',
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/api/chatbot/message/', {
        message: messageText
      });
      
      const botMessage = {
        sender: 'bot',
        text: response.data.reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        sender: 'bot',
        text: "Sorry, something went wrong. Try again.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => {
    sendMessage(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestedClick = (question) => {
    sendMessage(question);
  };

  const formatMessage = (text) => {
    // Convert markdown-style formatting to HTML
    const formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/• (.+)/g, '<li>• $1</li>')
      .split('\n');
    
    return formattedText.map((line, index) => {
      if (line.trim().startsWith('<li>')) {
        return <li key={index} dangerouslySetInnerHTML={{ __html: line }} />;
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return <div key={index} dangerouslySetInnerHTML={{ __html: line }} />;
    });
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className={`chatbot-fab ${isChatOpen ? 'open' : ''}`}
        onClick={() => setIsChatOpen(!isChatOpen)}
        title={isChatOpen ? 'Close chat' : 'Chat with CareerBot'}
      >
        {isChatOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
        <span className="online-indicator"></span>
      </button>

      {/* Chat Panel */}
      {isChatOpen && (
        <div className="chatbot-panel">
          {/* Header */}
          <div className="chatbot-header">
            <div className="header-left">
              <div className="bot-icon">🎓</div>
              <div className="header-text">
                <div className="bot-title">CareerBot</div>
                <div className="bot-subtitle">Your AI Career Guide</div>
              </div>
            </div>
            <button
              className="minimize-btn"
              onClick={() => setIsChatOpen(false)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.sender === 'bot' && (
                  <div className="message-icon">🎓</div>
                )}
                <div className="message-content">
                  <div className="message-bubble">
                    {message.sender === 'bot' ? formatMessage(message.text) : message.text}
                  </div>
                  <div className="message-time">{message.time}</div>
                </div>
              </div>
            ))}
            
            {/* Suggested Questions */}
            {messages.length === 1 && !isLoading && (
              <div className="suggested-questions">
                <div className="suggestions-title">You can ask me:</div>
                <div className="suggestions-grid">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="suggestion-chip"
                      onClick={() => handleSuggestedClick(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Loading Indicator */}
            {isLoading && (
              <div className="message bot">
                <div className="message-icon">🎓</div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about careers, exams..."
              disabled={isLoading}
              className="message-input"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              className="send-button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
