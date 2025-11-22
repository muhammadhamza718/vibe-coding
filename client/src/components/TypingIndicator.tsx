export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-1" data-testid="indicator-typing">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-full bg-primary animate-bounce-dots"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
}
