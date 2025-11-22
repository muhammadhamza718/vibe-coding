import AgentVisualization from '../AgentVisualization';
import { useState, useEffect } from 'react';

export default function AgentVisualizationExample() {
  const [currentAgent, setCurrentAgent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAgent((prev) => (prev + 1) % 5);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8">
      <AgentVisualization currentAgent={currentAgent} />
    </div>
  );
}
