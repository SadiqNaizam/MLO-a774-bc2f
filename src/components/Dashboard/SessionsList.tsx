import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface SessionUser {
  id: string;
  name: string;
  value: string;
  avatarSrc?: string;
  avatarFallback: string;
  isHighlighted?: boolean;
}

const sessionsData: SessionUser[] = [
  {
    id: 'connor',
    name: 'Connor Chandler',
    value: '$4909',
    avatarSrc: 'https://i.pravatar.cc/150?u=connor',
    avatarFallback: 'CC',
    isHighlighted: true,
  },
  {
    id: 'russell',
    name: 'Russell Floyd',
    value: '$857',
    avatarSrc: 'https://i.pravatar.cc/150?u=russell',
    avatarFallback: 'RF',
  },
  {
    id: 'douglas',
    name: 'Douglas White',
    value: '$612',
    avatarSrc: 'https://i.pravatar.cc/150?u=douglas',
    avatarFallback: 'DW',
  },
  {
    id: 'alta',
    name: 'Alta Fletcher',
    value: '$233',
    avatarSrc: 'https://i.pravatar.cc/150?u=alta',
    avatarFallback: 'AF',
  },
  {
    id: 'marguerite',
    name: 'Marguerite Pearson',
    value: '$233',
    avatarSrc: 'https://i.pravatar.cc/150?u=marguerite',
    avatarFallback: 'MP',
  },
  {
    id: 'leonard',
    name: 'Leonard Gutierrez',
    value: '$35',
    avatarSrc: 'https://i.pravatar.cc/150?u=leonard',
    avatarFallback: 'LG',
  },
  {
    id: 'helen',
    name: 'Helen Benson',
    value: '$43',
    avatarSrc: 'https://i.pravatar.cc/150?u=helen',
    avatarFallback: 'HB',
  },
];

interface SessionsListProps {
  className?: string;
}

const SessionsList: React.FC<SessionsListProps> = ({ className }) => {
  return (
    <Card className={cn('shadow-sm hover:shadow-md transition-shadow w-full', className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Employee Performance This Month</CardTitle>
        {/* Original image has "Sessions By Channel", but data is employee names. Adjusted title. */}
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {sessionsData.map((user) => (
            <li key={user.id} className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-3">
                  <AvatarImage src={user.avatarSrc} alt={user.name} />
                  <AvatarFallback>{user.avatarFallback}</AvatarFallback>
                </Avatar>
                <span className={cn('font-medium', user.isHighlighted ? 'text-primary' : 'text-foreground')}>
                  {user.name}
                </span>
              </div>
              <span className="text-muted-foreground">{user.value}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SessionsList;
