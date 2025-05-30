import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { CalendarDays, ChevronDown, UploadCloud, Info } from 'lucide-react';

interface PageHeaderProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  className,
  title = 'Kenneth Osborne',
  subtitle = 'Your last login: 21h ago from newzealand.',
}) => {
  const [selectedRange, setSelectedRange] = React.useState<string>('Last 7 days');

  return (
    <div className={cn('flex flex-col md:flex-row items-start md:items-center justify-between mb-6', className)}>
      <div>
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      <div className="flex items-center space-x-2 mt-4 md:mt-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-card">
              <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground" />
              {selectedRange}
              <ChevronDown className="h-4 w-4 ml-2 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setSelectedRange('Today')}>Today</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedRange('Last 7 days')}>Last 7 days</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedRange('Last 30 days')}>Last 30 days</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedRange('Last 90 days')}>Last 90 days</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedRange('Custom Range')}>Custom Range</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="outline" className="bg-card">
          <UploadCloud className="h-4 w-4 mr-2 text-muted-foreground" />
          Export
        </Button>
        <Button variant="outline" className="bg-card">
          <Info className="h-4 w-4 mr-2 text-muted-foreground" />
          Info
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
