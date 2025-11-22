import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Copy, Download, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeTab {
  id: string;
  name: string;
  content: string;
  language: string;
}

export default function CodeEditor() {
  const [tabs, setTabs] = useState<CodeTab[]>([
    {
      id: '1',
      name: 'Sidebar.jsx',
      language: 'jsx',
      content: `import { useState } from 'react';
import { Home, Settings, User } from 'lucide-react';

export default function Sidebar() {
  const [active, setActive] = useState('home');

  const items = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'settings', icon: Settings, label: 'Settings' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 p-4">
      {items.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => setActive(id)}
          className={\`flex items-center gap-3 w-full p-3 rounded-lg \${
            active === id ? 'bg-blue-600' : 'hover:bg-gray-800'
          }\`}
        >
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}`
    }
  ]);

  const [activeTab, setActiveTab] = useState('1');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const activeContent = tabs.find(t => t.id === activeTab)?.content || '';
    navigator.clipboard.writeText(activeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = (id: string) => {
    const newTabs = tabs.filter(t => t.id !== id);
    setTabs(newTabs);
    if (activeTab === id && newTabs.length > 0) {
      setActiveTab(newTabs[0].id);
    }
  };

  const activeContent = tabs.find(t => t.id === activeTab);

  return (
    <div className="flex flex-col h-full bg-card" data-testid="container-code-editor">
      <div className="flex items-center gap-2 px-2 py-1 border-b border-border overflow-x-auto">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-t-md cursor-pointer transition-colors group",
              activeTab === tab.id
                ? "bg-background border-b-2 border-b-primary"
                : "hover-elevate"
            )}
            onClick={() => setActiveTab(tab.id)}
            data-testid={`tab-${tab.name}`}
          >
            <span className="text-sm">{tab.name}</span>
            <Button
              size="icon"
              variant="ghost"
              className="w-4 h-4 p-0 opacity-0 group-hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                handleClose(tab.id);
              }}
              data-testid={`button-close-${tab.name}`}
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between p-2 border-b border-border bg-muted/30">
        <span className="text-xs text-muted-foreground">
          {activeContent?.language.toUpperCase()}
        </span>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={handleCopy}
            data-testid="button-copy-code"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-1" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-1" />
                Copy
              </>
            )}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            data-testid="button-download-code"
          >
            <Download className="w-4 h-4 mr-1" />
            Download
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 font-mono text-sm">
        <pre className="text-foreground">
          <code>{activeContent?.content}</code>
        </pre>
      </div>
    </div>
  );
}
