'use client';

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Trash2, GripVertical } from 'lucide-react';

interface Link {
  id: number;
  title: string;
  url: string;
  clicks: number;
}

interface LinkEditorProps {
  link: Link;
  onRemove: () => void;
}

export function LinkEditor({ link, onRemove }: LinkEditorProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <div className="cursor-move">
          <GripVertical className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Link Title"
            defaultValue={link.title}
          />
          <Input
            placeholder="URL"
            defaultValue={link.url}
            type="url"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {link.clicks} clicks
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onRemove}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}