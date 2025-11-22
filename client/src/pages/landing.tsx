import ParticleBackground from '@/components/ParticleBackground';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import { Eye, Brain, Wrench, Package, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

export default function Landing() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen">
      <ParticleBackground />

      <nav className="fixed top-0 left-0 right-0 z-50 glassmorphic">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold gradient-text">CodeForge</span>
          </div>
          <Button 
            onClick={() => setLocation('/workspace')}
            data-testid="button-launch-app"
          >
            Launch App
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </nav>

      <Hero />

      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Powered by 4 Specialized AI Agents
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our agentic architecture ensures every aspect of your project is handled by an expert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Eye}
              title="Perception Engine"
              description="Analyzes your requirements and extracts UI components, design tokens, and layout structure"
              accentColor="primary"
            />
            <FeatureCard
              icon={Brain}
              title="Reasoning Engine"
              description="Decides on the optimal tech stack including React, Tailwind, and best practices"
              accentColor="accent"
            />
            <FeatureCard
              icon={Wrench}
              title="Synthesis Engine"
              description="Generates production-ready code for components, tests, and Storybook stories"
              accentColor="chart-3"
            />
            <FeatureCard
              icon={Package}
              title="UX Bridge"
              description="Exports files and manages proper project structure for deployment"
              accentColor="chart-2"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join developers who are shipping faster with AI-powered code generation
          </p>
          <Button
            size="lg"
            onClick={() => setLocation('/workspace')}
            className="text-lg px-8 glow-primary hover:scale-105 transition-transform"
            data-testid="button-get-started-footer"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Get Started Free
          </Button>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          © 2025 CodeForge. AI-Powered Project Generation.
        </div>
      </footer>
    </div>
  );
}
