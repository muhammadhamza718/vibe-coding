import MessageBubble from '../MessageBubble';

export default function MessageBubbleExample() {
  return (
    <div className="p-8 max-w-3xl">
      <MessageBubble
        type="user"
        content="Create a dashboard with user authentication, sidebar navigation, and data tables"
        timestamp="2:30 PM"
      />
      <MessageBubble
        type="ai"
        content="I'll help you create a complete dashboard application with authentication. I'm analyzing your requirements now..."
        timestamp="2:31 PM"
      />
      <MessageBubble
        type="ai"
        content="Perfect! I've generated your dashboard with the following components:
• LoginForm with validation
• Sidebar with navigation
• DataTable with sorting and filtering
• User profile management"
        timestamp="2:33 PM"
      />
    </div>
  );
}
