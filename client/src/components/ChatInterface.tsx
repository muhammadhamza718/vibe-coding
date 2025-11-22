import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import AgentVisualization from './AgentVisualization';

interface Message {
  type: 'user' | 'ai';
  content: string;
  timestamp: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentAgent, setCurrentAgent] = useState(-1);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      type: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInput('');
    setIsTyping(true);
    setCurrentAgent(0);

    setTimeout(() => {
      setCurrentAgent(1);
    }, 1500);

    setTimeout(() => {
      setCurrentAgent(2);
    }, 3000);

    setTimeout(() => {
      setCurrentAgent(3);
    }, 4500);

    setTimeout(() => {
      setIsTyping(false);
      setCurrentAgent(-1);
      const aiMessage: Message = {
        type: 'ai',
        content: `I'll help you build that! I'm analyzing your requirements and generating a complete React project with all the components you need.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 6000);
  };

  return (
    <div className="flex flex-col h-full" data-testid="container-chat-interface">
      {currentAgent >= 0 && (
        <div className="p-4 border-b border-border bg-card/50">
          <AgentVisualization currentAgent={currentAgent} />
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-6">
        {messages.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold gradient-text mb-3">
              What would you like to build?
            </h3>
            <p className="text-muted-foreground">
              Describe your project and our AI agents will generate production-ready code
            </p>
          </div>
        ) : (
          <>
            {messages.map((msg, i) => (
              <MessageBubble key={i} {...msg} />
            ))}
            {isTyping && (
              <div className="flex gap-3 mb-4">
                <div className="w-8 h-8" />
                <div className="bg-card rounded-md px-4 py-3 border border-card-border">
                  <TypingIndicator />
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="p-4 border-t border-border bg-card/50">
        <div className="flex gap-2">
          <Textarea
            placeholder="Describe your project (e.g., 'Create a dashboard with user authentication...')"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            className="min-h-[60px] resize-none"
            data-testid="input-chat-message"
          />
          <Button
            size="icon"
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="h-[60px] w-[60px] glow-primary"
            data-testid="button-send-message"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
