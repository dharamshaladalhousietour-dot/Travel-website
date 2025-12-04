import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Phone, Mail, Minus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadInfo, setLeadInfo] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    eventDate: '',
    guestCount: ''
  });
  const [leadCaptured, setLeadCaptured] = useState(false);
  
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Generate session ID on mount
  useEffect(() => {
    const storedSessionId = localStorage.getItem('chat_session_id');
    if (storedSessionId) {
      setSessionId(storedSessionId);
      loadChatHistory(storedSessionId);
    } else {
      const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      setSessionId(newSessionId);
      localStorage.setItem('chat_session_id', newSessionId);
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadChatHistory = async (sessionId) => {
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      const response = await fetch(`${backendUrl}/api/chat-history/${sessionId}`);
      
      if (response.ok) {
        const data = await response.json();
        const formattedMessages = [];
        
        data.messages.forEach(msg => {
          formattedMessages.push({
            type: 'user',
            text: msg.user_message,
            timestamp: msg.timestamp
          });
          formattedMessages.push({
            type: 'bot',
            text: msg.bot_response,
            timestamp: msg.timestamp
          });
        });
        
        setMessages(formattedMessages);
        
        // Check if lead info was captured
        if (data.messages.length > 0 && data.messages[0].user_name) {
          setLeadInfo({
            name: data.messages[0].user_name || '',
            email: data.messages[0].user_email || '',
            phone: data.messages[0].user_phone || '',
            serviceType: data.messages[0].service_type || '',
            eventDate: data.messages[0].event_date || '',
            guestCount: data.messages[0].guest_count || ''
          });
          setLeadCaptured(true);
        }
      }
    } catch (error) {
      console.error('Error loading chat history:', error);
    }
  };

  const handleSendMessage = async (messageText = inputMessage) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage = {
      type: 'user',
      text: messageText,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      const response = await fetch(`${backendUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          message: messageText,
          user_name: leadCaptured ? leadInfo.name : null,
          user_email: leadCaptured ? leadInfo.email : null,
          user_phone: leadCaptured ? leadInfo.phone : null,
          service_type: leadCaptured ? leadInfo.serviceType : null,
          event_date: leadCaptured ? leadInfo.eventDate : null,
          guest_count: leadCaptured ? leadInfo.guestCount : null
        })
      });

      if (response.ok) {
        const data = await response.json();
        const botMessage = {
          type: 'bot',
          text: data.response,
          timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('Failed to get response');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        type: 'bot',
        text: 'Sorry, I encountered an error. Please try again or contact us directly at +91 8679333355.',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (message) => {
    handleSendMessage(message);
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (leadInfo.name && leadInfo.phone && leadInfo.serviceType) {
      setLeadCaptured(true);
      setShowLeadForm(false);
      const serviceText = leadInfo.serviceType === 'travel' ? 'Travel & Tour Packages' : 
                         leadInfo.serviceType === 'wedding' ? 'Dharamshala Weddings' : 
                         'Events in Dharamshala';
      handleSendMessage(`Hi, I'm ${leadInfo.name}. I'm interested in ${serviceText}.`);
    }
  };

  const handleEmail = () => {
    window.location.href = 'mailto:holidays@prettyplanettravels.com';
  };

  const handleWhatsApp = () => {
    const message = leadCaptured 
      ? `Hi! I'm ${leadInfo.name}. I was chatting with your AI assistant and need more information.`
      : `Hi! I need information about your travel packages.`;
    window.open(`https://wa.me/918679333355?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+918679333355';
  };

  const mainOptions = [
    '💍 Dharamshala Weddings',
    '🎉 Events in Dharamshala',
    '🏔️ Travel & Tour Packages'
  ];

  const actionButtons = [
    { text: '📋 Share Details', action: () => setShowLeadForm(true) },
    { text: '💬 WhatsApp Us', action: handleWhatsApp },
    { text: '📞 Call Now', action: handleCall },
    { text: '📧 Email Us', action: handleEmail }
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
    if (!isOpen && messages.length === 0) {
      // Welcome message
      setMessages([{
        type: 'bot',
        text: "Welcome to Pretty Planet Travels & Events! 🏔️\n\nWe specialize in Dharamshala-based services:\n\n💍 Dharamshala Weddings\n🎉 Events in Dharamshala\n🏔️ Travel & Tour Packages\n\nWhich service interests you?",
        timestamp: new Date().toISOString()
      }]);
    }
  };

  const handleMinimize = () => {
    setIsMinimized(true);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-[9999]">
        <button
          onClick={toggleChat}
          className="group bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110"
          aria-label="Open Chat"
          style={{ animation: 'none' }}
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
            AI
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col">
      {/* Chat Window */}
      <div className="bg-white rounded-2xl shadow-2xl w-[380px] md:w-[420px] h-[600px] flex flex-col overflow-hidden border-2 border-blue-900 animate-slideUp">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <MessageCircle className="h-6 w-6" />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-400 rounded-full border-2 border-white"></span>
            </div>
            <div>
              <h3 className="font-bold text-lg">Pretty Planet AI</h3>
              <p className="text-xs text-blue-200">Travel Assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleWhatsApp}
              className="p-2 hover:bg-blue-700 rounded-full transition-colors"
              title="Chat on WhatsApp"
            >
              <PhoneCall className="h-4 w-4" />
            </button>
            <button
              onClick={toggleChat}
              className="p-2 hover:bg-blue-700 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                  msg.type === 'user'
                    ? 'bg-gradient-to-r from-blue-900 to-blue-800 text-white'
                    : 'bg-white text-gray-800 shadow-md border border-gray-200'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                <span className={`text-xs mt-1 block ${msg.type === 'user' ? 'text-blue-200' : 'text-gray-500'}`}>
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl px-4 py-3 shadow-md">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-blue-900 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="w-2 h-2 bg-blue-900 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-blue-900 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {messages.length <= 2 && !leadCaptured && (
          <div className="p-3 bg-white border-t border-gray-200">
            <p className="text-xs text-gray-600 mb-2 font-semibold">Quick replies:</p>
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-900 text-xs rounded-full transition-colors border border-blue-200"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Lead Capture Form */}
        {showLeadForm && !leadCaptured && (
          <div className="p-4 bg-blue-50 border-t border-blue-200">
            <p className="text-sm font-semibold text-blue-900 mb-3">Let's stay connected!</p>
            <form onSubmit={handleLeadSubmit} className="space-y-2">
              <Input
                type="text"
                placeholder="Your Name *"
                value={leadInfo.name}
                onChange={(e) => setLeadInfo({...leadInfo, name: e.target.value})}
                className="text-sm"
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={leadInfo.email}
                onChange={(e) => setLeadInfo({...leadInfo, email: e.target.value})}
                className="text-sm"
              />
              <Input
                type="tel"
                placeholder="Phone Number *"
                value={leadInfo.phone}
                onChange={(e) => setLeadInfo({...leadInfo, phone: e.target.value})}
                className="text-sm"
                required
              />
              <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-sm">
                Continue Chat
              </Button>
            </form>
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-200">
          {!leadCaptured && messages.length > 3 && !showLeadForm && (
            <button
              onClick={() => setShowLeadForm(true)}
              className="w-full mb-3 py-2 bg-blue-900 hover:bg-blue-800 text-white text-sm rounded-lg transition-colors"
            >
              📋 Share your details for better assistance
            </button>
          )}
          
          <div className="flex gap-2 items-center">
            <Input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              onClick={() => handleSendMessage()}
              disabled={isLoading || !inputMessage.trim()}
              className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleWhatsApp}
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors"
            >
              <PhoneCall className="h-4 w-4" />
              WhatsApp
            </button>
            <button
              onClick={handleCall}
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;
