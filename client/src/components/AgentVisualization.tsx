import { Eye, Brain, Wrench, Package } from 'lucide-react';
import AgentIndicator from './AgentIndicator';

interface AgentVisualizationProps {
  currentAgent: number;
}

export default function AgentVisualization({ currentAgent }: AgentVisualizationProps) {
  const agents = [
    { name: 'Perception', icon: <Eye className="w-full h-full" /> },
    { name: 'Reasoning', icon: <Brain className="w-full h-full" /> },
    { name: 'Synthesis', icon: <Wrench className="w-full h-full" /> },
    { name: 'UX Bridge', icon: <Package className="w-full h-full" /> }
  ];

  const getStatus = (index: number) => {
    if (index < currentAgent) return 'completed';
    if (index === currentAgent) return 'active';
    return 'idle';
  };

  return (
    <div className="relative" data-testid="container-agent-visualization">
      <div className="flex justify-between items-center gap-4">
        {agents.map((agent, i) => (
          <div key={i} className="relative">
            <AgentIndicator
              name={agent.name}
              status={getStatus(i)}
              icon={agent.icon}
            />
            {i < agents.length - 1 && (
              <div
                className={`absolute top-8 left-full w-full h-0.5 transition-colors duration-300 ${
                  i < currentAgent ? 'bg-accent' : 'bg-border'
                }`}
                style={{ width: '100%' }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
