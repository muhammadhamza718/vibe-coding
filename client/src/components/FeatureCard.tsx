import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor?: string;
}

export default function FeatureCard({ icon: Icon, title, description, accentColor = 'primary' }: FeatureCardProps) {
  return (
    <Card 
      className="p-6 glassmorphic hover-elevate transition-all duration-300 hover:scale-105 group"
      data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className={`w-12 h-12 rounded-md bg-${accentColor}/10 flex items-center justify-center mb-4 group-hover:animate-pulse-glow`}>
        <Icon className={`w-6 h-6 text-${accentColor}`} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
}
