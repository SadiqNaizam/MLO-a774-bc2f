import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface EventChartProps {
  className?: string;
}

const eventChartData = [
  { time: '08:00', Critical: 2, Error: 5, Warning: 10 },
  { time: '09:00', Critical: 3, Error: 7, Warning: 12 },
  { time: '10:00', Critical: 1, Error: 4, Warning: 8 },
  { time: '11:00', Critical: 5, Error: 10, Warning: 15 },
  { time: '12:00', Critical: 2, Error: 6, Warning: 11 },
  { time: '13:00', Critical: 4, Error: 8, Warning: 18 },
  { time: '14:00', Critical: 3, Error: 5, Warning: 10 },
  { time: '15:00', Critical: 6, Error: 12, Warning: 22 },
  { time: '16:00', Critical: 2, Error: 7, Warning: 13 },
  { time: '17:00', Critical: 4, Error: 9, Warning: 16 },
];

const EventChart: React.FC<EventChartProps> = ({ className }) => {
  return (
    <Card className={cn('shadow-sm hover:shadow-md transition-shadow w-full', className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">Events</CardTitle>
          <div className="flex items-center space-x-3 text-xs">
            <div className="flex items-center">
              <span className="h-2.5 w-2.5 bg-destructive rounded-full mr-1.5"></span>
              <span className="text-muted-foreground">Critical</span>
            </div>
            <div className="flex items-center">
              <span className="h-2.5 w-2.5 bg-orange-500 rounded-full mr-1.5"></span>
              <span className="text-muted-foreground">Error</span>
            </div>
            <div className="flex items-center">
              <span className="h-2.5 w-2.5 bg-yellow-400 rounded-full mr-1.5"></span>
              <span className="text-muted-foreground">Warning</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 pb-6">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={eventChartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
            <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false}/>
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)' }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            {/* Legend is custom in header, so not using recharts Legend here */}
            <Line type="monotone" dataKey="Critical" stroke="hsl(var(--destructive))" strokeWidth={2} dot={false} activeDot={{ r: 5 }} />
            <Line type="monotone" dataKey="Error" stroke="hsl(var(--prd-accent-pink-val))" strokeWidth={2} dot={false} activeDot={{ r: 5 }} />
            {/* Using accent-pink for Error to match image's orange-red, assuming it's closer than standard orange */}
            {/* Original image has Orange for Error, using that explicitly */}
            {/* Let's use orange-500 for Error and yellow-400 for Warning to match image. */}
            <Line type="monotone" dataKey="Error" stroke="#F97316" strokeWidth={2} dot={false} activeDot={{ r: 5 }} /> {/* orange-500 */}
            <Line type="monotone" dataKey="Warning" stroke="#FACC15" strokeWidth={2} dot={false} activeDot={{ r: 5 }} /> {/* yellow-400 */}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default EventChart;
