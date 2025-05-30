import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface DeviceStatItem {
  id: string;
  label: string;
  value: string;
  progressValue?: number; // Optional progress value (0-100)
}

const deviceStatsData: DeviceStatItem[] = [
  {
    id: 'uptime',
    label: 'Uptime',
    value: '195 Days, 8 hours',
  },
  {
    id: 'firstSeen',
    label: 'First Seen',
    value: '23 Sep 2019, 2.04PM',
  },
  {
    id: 'collectedTime',
    label: 'Collected time',
    value: '23 Sep 2019, 2.04PM',
  },
  {
    id: 'memorySpace',
    label: 'Memory space',
    value: '168.3GB / 256GB',
    progressValue: (168.3 / 256) * 100, // Example calculation
  },
];

interface DeviceStatsProps {
  className?: string;
}

const DeviceStats: React.FC<DeviceStatsProps> = ({ className }) => {
  return (
    <Card className={cn('shadow-sm hover:shadow-md transition-shadow w-full', className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Device Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-5">
          {deviceStatsData.map((item) => (
            <li key={item.id} className="text-sm">
              <div className="flex justify-between mb-1">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="font-medium text-foreground">{item.value}</span>
              </div>
              {item.progressValue !== undefined && (
                <Progress value={item.progressValue} className="h-2 bg-muted" indicatorClassName="bg-accent-green" />
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default DeviceStats;
