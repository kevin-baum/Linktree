'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';

const data = [
  { name: 'Mon', clicks: 24 },
  { name: 'Tue', clicks: 35 },
  { name: 'Wed', clicks: 45 },
  { name: 'Thu', clicks: 30 },
  { name: 'Fri', clicks: 55 },
  { name: 'Sat', clicks: 40 },
  { name: 'Sun', clicks: 50 },
];

interface Link {
  id: number;
  title: string;
  url: string;
  clicks: number;
}

interface AnalyticsProps {
  links: Link[];
}

export function Analytics({ links }: AnalyticsProps) {
  const totalClicks = links.reduce((sum, link) => sum + link.clicks, 0);
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <div className="text-sm text-muted-foreground">Total Clicks</div>
          <div className="text-2xl font-bold">{totalClicks}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-muted-foreground">Active Links</div>
          <div className="text-2xl font-bold">{links.length}</div>
        </Card>
      </div>
      
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#888888" />
            <YAxis stroke="#888888" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="clicks"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Top Links</h3>
        {links
          .sort((a, b) => b.clicks - a.clicks)
          .slice(0, 3)
          .map((link) => (
            <Card key={link.id} className="p-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">{link.title}</span>
                <span className="text-sm text-muted-foreground">
                  {link.clicks} clicks
                </span>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
}