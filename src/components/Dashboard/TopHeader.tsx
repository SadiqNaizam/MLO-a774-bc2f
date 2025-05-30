import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Menu, Mail, Bell, ChevronDown, ShoppingCart, Circle } from 'lucide-react';

interface TopHeaderProps {
  className?: string;
  onToggleSidebar?: () => void; // Optional: if sidebar collapse is controlled from here
}

const TopHeader: React.FC<TopHeaderProps> = ({ className, onToggleSidebar }) => {
  const [activeLink, setActiveLink] = React.useState<string>('Statistic');

  const navLinks = [
    { id: 'calendar', label: 'Calendar', href: '#' },
    { id: 'statistic', label: 'Statistic', href: '#' },
    { id: 'employee', label: 'Employee', href: '#' },
  ];

  return (
    <header
      className={cn(
        'h-16 bg-card text-foreground flex items-center justify-between px-6 fixed top-0 left-0 md:left-64 right-0 z-30 border-b',
        className
      )}
    >
      <div className="flex items-center">
        {/* Hamburger Menu for mobile / collapsed sidebar - assuming left-0 for mobile */} 
        <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={onToggleSidebar}>
          <Menu className="h-6 w-6" />
        </Button>
        {/* Logo for larger screens, or instead of hamburger if sidebar is always visible */} 
        <div className="hidden md:flex items-center mr-6">
          <Circle className="h-7 w-7 text-accent mr-2" fill="hsl(var(--accent))" />
          <span className="font-bold text-xl text-foreground">Celestial</span>
        </div>
        {/* Hidden on mobile, shown on md+ for fixed sidebar */}
        <Button variant="ghost" size="icon" className="hidden md:inline-flex mr-4" onClick={onToggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Centered Navigation Links */}
      <nav className="hidden md:flex items-center space-x-1">
        {navLinks.map((link) => (
          <Button
            key={link.id}
            variant="ghost"
            onClick={() => setActiveLink(link.label)}
            className={cn(
              'px-3 py-2 text-sm font-medium rounded-md',
              activeLink === link.label
                ? 'text-primary relative after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:h-[2px] after:bg-primary'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {link.label}
          </Button>
        ))}
      </nav>

      {/* Right-side Actions */}
      <div className="flex items-center space-x-4">
        <Button variant="link" className="text-muted-foreground hover:text-primary px-2">
          Help
        </Button>
        <div className="relative">
          <Button variant="ghost" size="icon">
            <Mail className="h-5 w-5 text-muted-foreground" />
          </Button>
          <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-xs bg-accent-green text-white">2</Badge>
        </div>
        <div className="relative">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-muted-foreground" />
          </Button>
          <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-xs bg-destructive text-destructive-foreground">8</Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://i.pravatar.cc/150?u=evanmorales" alt="Evan Morales" />
            <AvatarFallback>EM</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-foreground hidden sm:inline">Evan Morales</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground hidden sm:inline" />
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
