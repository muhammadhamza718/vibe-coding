import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface AgentIndicatorProps {
  name: string;
  status: 'idle' | 'active' | 'completed';
  icon: React.ReactNode;
}

export default function AgentIndicator({ name, status, icon }: AgentIndicatorProps) {
  return (
    <div className="flex flex-col items-center gap-2" data-testid={`agent-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div
        className={cn(
          "w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300",
          status === 'idle' && "border-border bg-card",
          status === 'active' && "border-primary bg-primary/10 animate-pulse-glow",
          status === 'completed' && "border-accent bg-accent/10"
        )}
      >
        {status === 'completed' ? (
          <Check className="w-8 h-8 text-accent" data-testid="icon-check" />
        ) : (
          <div className={cn(
            "w-8 h-8",
            status === 'active' ? "text-primary" : "text-muted-foreground"
          )}>
            {icon}
          </div>
        )}
      </div>
      <span className={cn(
        "text-xs font-medium transition-colors",
        status === 'active' && "text-primary",
        status === 'completed' && "text-accent",
        status === 'idle' && "text-muted-foreground"
      )}>
        {name}
      </span>
    </div>
  );
}
