import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users2, Store, TrendingUp, ChevronDown } from 'lucide-react'; // Using Users2, Store for Online/Offline

interface RevenueChartProps {
  className?: string;
}

const chartDataMonthly = [
  { name: 'Jan', Online: 2800, Offline: 1800, Marketing: 900 },
  { name: 'Feb', Online: 3200, Offline: 2000, Marketing: 1100 },
  { name: 'Mar', Online: 2500, Offline: 2800, Marketing: 1500 },
  { name: 'Apr', Online: 4100, Offline: 2200, Marketing: 1000 },
  { name: 'May', Online: 3800, Offline: 3100, Marketing: 1800 },
  { name: 'Jun', Online: 4500, Offline: 2500, Marketing: 1300 },
  { name: 'Jul', Online: 3900, Offline: 3300, Marketing: 1900 },
  { name: 'Aug', Online: 5200, Offline: 2700, Marketing: 1600 },
];

const chartDataWeekly = [
  { name: 'W1', Online: 700, Offline: 400, Marketing: 200 },
  { name: 'W2', Online: 800, Offline: 500, Marketing: 250 },
  { name: 'W3', Online: 600, Offline: 700, Marketing: 350 },
  { name: 'W4', Online: 900, Offline: 550, Marketing: 220 },
];

const RevenueChart: React.FC<RevenueChartProps> = ({ className }) => {
  const [timeframe, setTimeframe] = React.useState<'month' | 'week'>('month');
  const data = timeframe === 'month' ? chartDataMonthly : chartDataWeekly;

  const formatCurrency = (value: number) => `$${value.toLocaleString()}`;

  return (
    <Card className={cn('shadow-sm hover:shadow-md transition-shadow w-full', className)}>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">Sales Analytics</CardTitle>
          <div className="mt-2 sm:mt-0">
            <Select defaultValue="month" onValueChange={(value) => setTimeframe(value as 'month' | 'week')}>
              <SelectTrigger className="w-[120px] h-8 text-xs bg-card">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">Month</SelectItem>
                <SelectItem value="week">Week</SelectItem>
              </SelectContent>
            </Select>
          </div> 
        </div>
        <div className="mt-4 flex flex-wrap gap-4 sm:gap-6">
          <div className="flex items-center">
            <Users2 className="h-5 w-5 mr-2 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Online</p>
              <p className="text-lg font-bold text-primary">23,342</p>
            </div>
          </div>
          <div className="flex items-center">
            <Store className="h-5 w-5 mr-2 text-orange-500" />
            <div>
              <p className="text-xs text-muted-foreground">Offline</p>
              <p className="text-lg font-bold text-orange-500">13,221</p>
            </div>
          </div>
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-accent-green" />
            <div>
              <p className="text-xs text-muted-foreground">Marketing</p>
              <p className="text-lg font-bold text-accent-green">1,542</p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 pb-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false}/>
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={formatCurrency}/>
            <Tooltip
              formatter={(value: number) => formatCurrency(value)}
              contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)' }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Legend iconType="circle" wrapperStyle={{fontSize: '12px', paddingTop: '10px'}}/>
            <Line type="monotone" dataKey="Online" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4, strokeWidth:2 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="Offline" stroke="hsl(var(--prd-accent-pink-val))" strokeWidth={2} dot={{ r: 4, strokeWidth:2 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="Marketing" stroke="hsl(var(--accent-green))" strokeWidth={2} dot={{ r: 4, strokeWidth:2 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
