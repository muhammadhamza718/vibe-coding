import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, Bot } from 'lucide-react';

interface MessageBubbleProps {
  type: 'user' | 'ai';
  content: string;
  timestamp?: string;
}

export default function MessageBubble({ type, content, timestamp }: MessageBubbleProps) {
  const isUser = type === 'user';

  return (
    <div
      className={cn(
        "flex gap-3 mb-4",
        isUser ? "justify-end animate-slide-in-right" : "justify-start animate-slide-in-left"
      )}
      data-testid={`message-${type}`}
    >
      {!isUser && (
        <Avatar className="w-8 h-8 border-2 border-primary/50 animate-pulse-glow">
          <AvatarFallback className="bg-primary/10">
            <Bot className="w-4 h-4 text-primary" />
          </AvatarFallback>
        </Avatar>
      )}

      <div
        className={cn(
          "max-w-[70%] rounded-md px-4 py-3",
          isUser
            ? "bg-primary text-primary-foreground border border-primary-border"
            : "bg-card text-card-foreground border border-card-border"
        )}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
        {timestamp && (
          <span className="text-xs opacity-70 mt-1 block">{timestamp}</span>
        )}
      </div>

      {isUser && (
        <Avatar className="w-8 h-8 border-2 border-accent/50">
          <AvatarFallback className="bg-accent/10">
            <User className="w-4 h-4 text-accent" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
