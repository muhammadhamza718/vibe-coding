import FeatureCard from '../FeatureCard';
import { Sparkles, Code2, Zap, FileCode } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <FeatureCard
        icon={Sparkles}
        title="AI-Powered"
        description="4 specialized agents analyze and generate code"
        accentColor="primary"
      />
      <FeatureCard
        icon={Code2}
        title="Production Ready"
        description="Complete projects with tests and stories"
        accentColor="accent"
      />
      <FeatureCard
        icon={Zap}
        title="Lightning Fast"
        description="Generate projects in under 2 minutes"
        accentColor="chart-3"
      />
      <FeatureCard
        icon={FileCode}
        title="Full Stack"
        description="React, Tailwind, and proper structure"
        accentColor="chart-2"
      />
    </div>
  );
}
