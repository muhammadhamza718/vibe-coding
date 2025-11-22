import AgentIndicator from '../AgentIndicator';
import { Eye, Brain, Wrench, Package } from 'lucide-react';

export default function AgentIndicatorExample() {
  return (
    <div className="p-8 flex gap-8 justify-center">
      <AgentIndicator name="Perception" status="completed" icon={<Eye className="w-full h-full" />} />
      <AgentIndicator name="Reasoning" status="active" icon={<Brain className="w-full h-full" />} />
      <AgentIndicator name="Synthesis" status="idle" icon={<Wrench className="w-full h-full" />} />
      <AgentIndicator name="UX Bridge" status="idle" icon={<Package className="w-full h-full" />} />
    </div>
  );
}
