import { useState } from 'react';
import { ChevronRight, ChevronDown, File, Folder, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface FileNode {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

interface FileItemProps {
  node: FileNode;
  depth: number;
  selected: string | null;
  onSelect: (name: string) => void;
}

function FileItem({ node, depth, selected, onSelect }: FileItemProps) {
  const [isOpen, setIsOpen] = useState(true);
  const isSelected = selected === node.name;

  return (
    <div>
      <div
        className={cn(
          "flex items-center gap-2 py-1.5 px-2 rounded-md cursor-pointer hover-elevate transition-colors",
          isSelected && "bg-primary/10 border-l-2 border-l-primary"
        )}
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
        onClick={() => {
          if (node.type === 'folder') setIsOpen(!isOpen);
          else onSelect(node.name);
        }}
        data-testid={`file-${node.name}`}
      >
        {node.type === 'folder' ? (
          <>
            {isOpen ? (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            )}
            <Folder className="w-4 h-4 text-accent" />
          </>
        ) : (
          <>
            <div className="w-4" />
            <File className="w-4 h-4 text-primary" />
          </>
        )}
        <span className="text-sm">{node.name}</span>
      </div>
      {node.type === 'folder' && isOpen && node.children && (
        <div className="animate-fade-in">
          {node.children.map((child, i) => (
            <FileItem
              key={i}
              node={child}
              depth={depth + 1}
              selected={selected}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FileExplorer() {
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const fileTree: FileNode = {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'components',
        type: 'folder',
        children: [
          { name: 'Sidebar.jsx', type: 'file' },
          { name: 'Sidebar.test.js', type: 'file' },
          { name: 'DataTable.jsx', type: 'file' },
          { name: 'LoginForm.jsx', type: 'file' },
        ]
      },
      {
        name: 'styles',
        type: 'folder',
        children: [
          { name: 'globals.css', type: 'file' },
        ]
      },
      { name: 'App.jsx', type: 'file' },
      { name: 'index.js', type: 'file' },
    ]
  };

  return (
    <div className="flex flex-col h-full" data-testid="container-file-explorer">
      <div className="p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search files..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
            data-testid="input-file-search"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        <FileItem node={fileTree} depth={0} selected={selected} onSelect={setSelected} />
      </div>

      <div className="p-4 border-t border-border bg-card/50">
        <div className="text-xs text-muted-foreground">
          {selected ? `Selected: ${selected}` : 'No file selected'}
        </div>
      </div>
    </div>
  );
}
