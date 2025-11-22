import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import ChatInterface from './ChatInterface';
import FileExplorer from './FileExplorer';
import CodeEditor from './CodeEditor';
import { Button } from '@/components/ui/button';
import { Code2, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export default function Workspace() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="h-screen flex flex-col" data-testid="container-workspace">
      <header className="h-14 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Code2 className="w-6 h-6 text-primary" />
          <h1 className="text-lg font-semibold gradient-text">CodeForge</h1>
        </div>
        <Button
          size="icon"
          variant="ghost"
          onClick={toggleTheme}
          data-testid="button-theme-toggle"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
      </header>

      <ResizablePanelGroup direction="horizontal" className="flex-1">
        <ResizablePanel defaultSize={35} minSize={25}>
          <ChatInterface />
        </ResizablePanel>

        <ResizableHandle className="w-1 bg-border hover:bg-primary/50 transition-colors" />

        <ResizablePanel defaultSize={25} minSize={15}>
          <FileExplorer />
        </ResizablePanel>

        <ResizableHandle className="w-1 bg-border hover:bg-primary/50 transition-colors" />

        <ResizablePanel defaultSize={40} minSize={30}>
          <CodeEditor />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
