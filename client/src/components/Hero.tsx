import { Button } from '@/components/ui/button';
import { Sparkles, Code2, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const phrases = [
  "Build React apps from scratch",
  "Generate production-ready code",
  "Deploy with confidence"
];

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < phrase.length) {
          setDisplayText(phrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-accent/10" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
          <Sparkles className="w-6 h-6 text-accent animate-pulse-glow" />
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            AI-Powered Development
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text animate-fade-in">
          Build. Generate. Deploy.
        </h1>

        <div className="h-20 mb-8">
          <p className="text-xl md:text-2xl text-foreground/90 font-medium">
            {displayText}
            <span className="inline-block w-0.5 h-6 bg-accent ml-1 animate-pulse" />
          </p>
        </div>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
          Transform natural language into production-ready React projects with CodeForge's intelligent AI agents.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in">
          <Button 
            size="lg" 
            className="text-lg px-8 glow-primary hover:scale-105 transition-transform"
            data-testid="button-get-started"
          >
            <Zap className="w-5 h-5 mr-2" />
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 backdrop-blur-sm hover:scale-105 transition-transform"
            data-testid="button-view-demo"
          >
            <Code2 className="w-5 h-5 mr-2" />
            View Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { value: "4", label: "AI Agents", icon: Sparkles },
            { value: "100%", label: "Production Ready", icon: Code2 },
            { value: "<2min", label: "Generation Time", icon: Zap }
          ].map((stat, i) => (
            <div 
              key={i} 
              className="p-6 rounded-md bg-card/50 backdrop-blur-sm border border-card-border hover-elevate"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
