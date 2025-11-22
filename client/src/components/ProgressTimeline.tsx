import { cn } from '@/lib/utils';
import { Check, Loader2 } from 'lucide-react';

interface Step {
  label: string;
  status: 'pending' | 'active' | 'completed';
}

interface ProgressTimelineProps {
  steps: Step[];
}

export default function ProgressTimeline({ steps }: ProgressTimelineProps) {
  return (
    <div className="flex items-center justify-between gap-2" data-testid="container-progress-timeline">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center flex-1">
          <div className="flex flex-col items-center gap-2 min-w-0">
            <div
              className={cn(
                "w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                step.status === 'completed' && "border-accent bg-accent/10",
                step.status === 'active' && "border-primary bg-primary/10 animate-pulse-glow",
                step.status === 'pending' && "border-border bg-card"
              )}
            >
              {step.status === 'completed' && (
                <Check className="w-5 h-5 text-accent" />
              )}
              {step.status === 'active' && (
                <Loader2 className="w-5 h-5 text-primary animate-spin" />
              )}
              {step.status === 'pending' && (
                <div className="w-2 h-2 rounded-full bg-muted-foreground" />
              )}
            </div>
            <span
              className={cn(
                "text-xs font-medium text-center",
                step.status === 'active' && "text-primary",
                step.status === 'completed' && "text-accent",
                step.status === 'pending' && "text-muted-foreground"
              )}
            >
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className="flex-1 h-0.5 mx-2 bg-border">
              <div
                className={cn(
                  "h-full transition-all duration-300",
                  step.status === 'completed' ? "bg-accent w-full" : "bg-transparent w-0"
                )}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
