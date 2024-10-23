'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { LinkEditor } from '@/components/link-editor';
import { Analytics } from '@/components/analytics';

interface Link {
  id: number;
  title: string;
  url: string;
  clicks: number;
}

export default function DashboardPage() {
  const [links, setLinks] = useState<Link[]>([
    { id: 1, title: 'My Website', url: 'https://example.com', clicks: 145 },
    { id: 2, title: 'Twitter', url: 'https://twitter.com/username', clicks: 89 },
  ]);

  const addLink = () => {
    const newLink = {
      id: Date.now(),
      title: 'New Link',
      url: '',
      clicks: 0,
    };
    setLinks([...links, newLink]);
  };

  const removeLink = (id: number) => {
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <Button onClick={addLink} className="gap-2">
                <Plus className="w-4 h-4" /> Add Link
              </Button>
            </div>
            
            <Card className="p-6">
              <div className="space-y-2 mb-4">
                <h2 className="text-xl font-semibold">Your Page</h2>
                <div className="flex gap-4 items-center">
                  <Input 
                    value="yourdomain.com/" 
                    disabled 
                    className="w-auto bg-muted"
                  />
                  <Input 
                    placeholder="username" 
                    className="w-auto"
                  />
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              {links.map((link) => (
                <LinkEditor
                  key={link.id}
                  link={link}
                  onRemove={() => removeLink(link.id)}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Analytics Overview</h2>
              <Analytics links={links} />
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}