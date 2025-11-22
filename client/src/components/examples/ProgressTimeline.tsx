import ProgressTimeline from '../ProgressTimeline';
import { useState, useEffect } from 'react';

export default function ProgressTimelineExample() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: 'Analyzing', status: 'pending' as const },
    { label: 'Planning', status: 'pending' as const },
    { label: 'Generating', status: 'pending' as const },
    { label: 'Finalizing', status: 'pending' as const },
  ];

  const stepsWithStatus = steps.map((step, i) => ({
    ...step,
    status: (i < currentStep ? 'completed' : i === currentStep ? 'active' : 'pending') as 'pending' | 'active' | 'completed'
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % (steps.length + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8">
      <ProgressTimeline steps={stepsWithStatus} />
    </div>
  );
}
