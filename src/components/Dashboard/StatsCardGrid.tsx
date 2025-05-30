import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Users, ShoppingCart, Activity, ArrowUp, ArrowDown } from 'lucide-react';

interface StatCardData {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositiveChange: boolean;
  icon: React.ElementType;
  iconColor: string;
}

const statCardData: StatCardData[] = [
  {
    id: 'revenue',
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    isPositiveChange: true,
    icon: DollarSign,
    iconColor: 'text-accent-green',
  },
  {
    id: 'subscriptions',
    title: 'Subscriptions',
    value: '+2350',
    change: '+180.1%',
    isPositiveChange: true,
    icon: Users,
    iconColor: 'text-primary',
  },
  {
    id: 'orders',
    title: 'Total Orders',
    value: '12,873',
    change: '-2.5%',
    isPositiveChange: false,
    icon: ShoppingCart,
    iconColor: 'text-accent',
  },
  {
    id: 'activeUsers',
    title: 'Active Users',
    value: '789',
    change: '+12.3%',
    isPositiveChange: true,
    icon: Activity,
    iconColor: 'text-orange-500',
  },
];

interface StatCardProps extends StatCardData {
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  isPositiveChange,
  icon: Icon,
  iconColor,
  className,
}) => {
  const ChangeIcon = isPositiveChange ? ArrowUp : ArrowDown;
  return (
    <Card className={cn('shadow-sm hover:shadow-md transition-shadow', className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className={cn('h-5 w-5', iconColor)} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <p className={cn(
          'text-xs flex items-center',
          isPositiveChange ? 'text-accent-green' : 'text-destructive'
        )}>
          <ChangeIcon className="h-3 w-3 mr-1" />
          {change} from last month
        </p>
      </CardContent>
    </Card>
  );
};

interface StatsCardGridProps {
  className?: string;
}

const StatsCardGrid: React.FC<StatsCardGridProps> = ({ className }) => {
  return (
    <div
      className={cn('grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4', className)}
    >
      {statCardData.map((data) => (
        <StatCard key={data.id} {...data} />
      ))}
    </div>
  );
};

export default StatsCardGrid;
