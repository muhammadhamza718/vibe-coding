import TypingIndicator from '../TypingIndicator';

export default function TypingIndicatorExample() {
  return (
    <div className="p-8">
      <div className="max-w-md bg-card p-4 rounded-md border border-card-border">
        <p className="text-sm text-muted-foreground mb-2">AI is thinking...</p>
        <TypingIndicator />
      </div>
    </div>
  );
}
