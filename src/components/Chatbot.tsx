import React, { useState, useRef, useEffect } from 'react';
import { 
  FiMessageSquare, 
  FiX, 
  FiSend, 
  FiCpu, 
  FiUser, 
  FiLoader, 
  FiTrash2, 
  FiAlertCircle 
} from 'react-icons/fi';
import { sendMessageToGrok, type ChatMessage } from '../utils/grok';

// Default welcome greeting (defined outside component to prevent react-hooks dependency warnings)
const welcomeMessage: ChatMessage = {
  role: 'assistant',
  content: "Hi! I'm Sowrav's AI assistant. 🚀\n\nAsk me anything about his skills, background, professional experience, or the projects he built (like DryDelicious, User Management System, or Tech Blog App). How can I help you today?"
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load chat history or set default message when chat opens
  useEffect(() => {
    const saved = localStorage.getItem('grok_chat_history');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch {
        setMessages([welcomeMessage]);
      }
    } else {
      setMessages([welcomeMessage]);
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('grok_chat_history', JSON.stringify(messages));
    }
  }, [messages]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const messageContent = textToSend || input;
    if (!messageContent.trim() || isLoading) return;

    if (!textToSend) {
      setInput('');
    }
    
    setError(null);
    const userMessage: ChatMessage = { role: 'user', content: messageContent };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      // Send the conversation history (excluding the first welcome message if it was added manually)
      const apiHistory = updatedMessages.filter(msg => msg !== welcomeMessage);
      const reply = await sendMessageToGrok(apiHistory);
      
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to connect to the assistant. Please try again.';
      setError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    if (window.confirm('Clear chat history?')) {
      setMessages([welcomeMessage]);
      localStorage.removeItem('grok_chat_history');
      setError(null);
    }
  };

  // Helper to format basic markdown (bold, lists, links) inside chatbot bubbles
  const formatMessage = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      // Check if bullet point
      const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ');
      let cleanLine = line;
      if (isBullet) {
        cleanLine = line.trim().substring(2);
      }

      // Check for links [label](url)
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;
      let match;

      // Bold formatter helper
      const formatBold = (str: string): React.ReactNode[] => {
        const boldParts: React.ReactNode[] = [];
        const boldRegex = /\*\*([^*]+)\*\*/g;
        let boldLastIndex = 0;
        let boldMatch;

        while ((boldMatch = boldRegex.exec(str)) !== null) {
          if (boldMatch.index > boldLastIndex) {
            boldParts.push(str.substring(boldLastIndex, boldMatch.index));
          }
          boldParts.push(
            <strong key={boldMatch.index} className="text-accent-cyan font-bold">
              {boldMatch[1]}
            </strong>
          );
          boldLastIndex = boldRegex.lastIndex;
        }
        if (boldLastIndex < str.length) {
          boldParts.push(str.substring(boldLastIndex));
        }
        return boldParts;
      };

      while ((match = linkRegex.exec(cleanLine)) !== null) {
        if (match.index > lastIndex) {
          parts.push(...formatBold(cleanLine.substring(lastIndex, match.index)));
        }
        const label = match[1];
        const url = match[2];
        parts.push(
          <a
            key={match.index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-cyan underline hover:text-accent-teal transition-colors font-medium break-all"
          >
            {label}
          </a>
        );
        lastIndex = linkRegex.lastIndex;
      }

      if (lastIndex < cleanLine.length) {
        parts.push(...formatBold(cleanLine.substring(lastIndex)));
      }

      if (isBullet) {
        return (
          <li key={idx} className="ml-4 list-disc mb-1 last:mb-0 text-gray-300">
            <span>{parts}</span>
          </li>
        );
      }

      return (
        <p key={idx} className="mb-2 last:mb-0 text-gray-300 leading-relaxed text-[15px]">
          {parts}
        </p>
      );
    });
  };

  const presetQuestions = [
    "Tell me about your projects",
    "What are your core skills?",
    "How can I contact you?"
  ];

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-accent-cyan to-accent-teal text-primary-dark flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,157,0.4)] transition-all duration-300 border border-white/20 active:scale-95"
          title="Chat with Sowrav's AI"
        >
          <FiMessageSquare className="h-6 w-6 stroke-[2.5]" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-accent-cyan"></span>
          </span>
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div 
          className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[540px] max-h-[85vh] rounded-2xl glass-effect shadow-2xl flex flex-col overflow-hidden animate-slide-up border border-white/10"
          style={{
            background: 'rgba(17, 17, 17, 0.85)',
            backdropFilter: 'blur(16px)'
          }}
        >
          {/* Header */}
          <div className="px-4 py-3 border-b border-white/10 bg-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="h-9 w-9 rounded-full bg-gradient-to-r from-accent-cyan/20 to-accent-teal/20 border border-accent-cyan/40 flex items-center justify-center text-accent-cyan">
                  <FiCpu className="h-5 w-5" />
                </div>
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border border-primary-dark animate-pulse"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-wide uppercase">Sowrav's Assistant</h4>
                <p className="text-[11px] text-accent-cyan font-medium">Grok-powered AI</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <button
                onClick={handleClear}
                className="p-2 text-gray-400 hover:text-red-400 rounded-md hover:bg-white/5 transition-colors cursor-pointer"
                title="Clear chat history"
              >
                <FiTrash2 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-white rounded-md hover:bg-white/5 transition-colors cursor-pointer"
                title="Close chat"
              >
                <FiX className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-2.5 ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.role !== 'user' && (
                  <div className="h-7 w-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan shrink-0 mt-0.5">
                    <FiCpu className="h-4 w-4" />
                  </div>
                )}
                
                <div
                  className={`rounded-2xl px-4 py-2.5 max-w-[82%] text-sm ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-accent-cyan/15 to-accent-teal/15 border border-accent-cyan/35 text-white rounded-tr-none'
                      : 'bg-white/5 border border-white/10 text-gray-100 rounded-tl-none'
                  }`}
                >
                  {formatMessage(msg.content)}
                </div>

                {msg.role === 'user' && (
                  <div className="h-7 w-7 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan shrink-0 mt-0.5">
                    <FiUser className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2.5 justify-start">
                <div className="h-7 w-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan shrink-0 mt-0.5">
                  <FiCpu className="h-4 w-4" />
                </div>
                <div className="rounded-2xl rounded-tl-none px-4 py-3 bg-white/5 border border-white/10 text-accent-cyan text-sm flex items-center space-x-1">
                  <span className="h-1.5 w-1.5 bg-accent-cyan rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="h-1.5 w-1.5 bg-accent-cyan rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="h-1.5 w-1.5 bg-accent-cyan rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-950/20 border border-red-500/30 text-red-300 text-xs">
                <FiAlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                <p className="flex-1">{error}</p>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick-start prompts (only shown when conversation is fresh) */}
          {messages.length === 1 && !isLoading && (
            <div className="px-4 py-2 border-t border-white/5 bg-white/[0.01] flex flex-wrap gap-2">
              {presetQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-full hover:bg-accent-cyan/10 hover:border-accent-cyan/30 hover:text-white transition-all duration-300 cursor-pointer text-left font-medium active:scale-95"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Footer Input Form */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-white/10 bg-white/5 flex gap-2 items-center"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about Sowrav..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/30 transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="h-9 w-9 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-teal text-primary-dark flex items-center justify-center cursor-pointer shadow hover:shadow-[0_0_10px_rgba(0,255,157,0.3)] transition-all duration-300 active:scale-90 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
            >
              {isLoading ? (
                <FiLoader className="h-4 w-4 animate-spin" />
              ) : (
                <FiSend className="h-4 w-4 stroke-[2.5]" />
              )}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
