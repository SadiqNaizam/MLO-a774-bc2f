import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  LayoutDashboard,
  Component,
  FileText,
  BarChart3,
  TableCells,
  AppWindow,
  Users,
  ShieldAlert,
  BookText,
  Search,
  ChevronRight,
  Dot
} from 'lucide-react';

interface NavItemProps {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
  badgeText?: string;
  isCategory?: boolean;
  color?: string; // For category dots
}

const NavItem: React.FC<NavItemProps & { isCollapsed?: boolean }> = ({
  label,
  icon: Icon,
  href,
  isActive,
  badgeText,
  isCategory,
  color,
  isCollapsed
}) => {
  return (
    <a
      href={href}
      className={cn(
        'flex items-center py-2.5 px-4 rounded-md text-sm transition-colors duration-200',
        isActive
          ? 'bg-sidebar-accent text-sidebar-foreground' // Sidebar accent color not defined, using a generic approach
          : 'hover:bg-gray-700/50 text-sidebar-foreground/80 hover:text-sidebar-foreground',
        isCategory && 'py-1.5',
        isCollapsed && 'justify-center'
      )}
    >
      {isCategory && color && (
        <span style={{ backgroundColor: color }} className="w-2.5 h-2.5 rounded-full mr-3"></span>
      )}
      {!isCategory && <Icon className={cn('h-5 w-5', !isCollapsed && 'mr-3')} />}
      {!isCollapsed && <span className="flex-grow">{label}</span>}
      {!isCollapsed && badgeText && (
        <Badge variant="default" className="ml-auto bg-accent text-accent-foreground">
          {badgeText}
        </Badge>
      )}
      {!isCollapsed && !isCategory && !badgeText && (
        <ChevronRight className="h-4 w-4 ml-auto text-sidebar-foreground/50" />
      )}
    </a>
  );
};

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);
  // In a real app, active state would come from router
  const [activeItem, setActiveItem] = React.useState<string>('dashboard');

  const navItems: NavItemProps[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '#', isActive: activeItem === 'dashboard', badgeText: 'New' },
    { id: 'ui-elements', label: 'UI Elements', icon: Component, href: '#', isActive: activeItem === 'ui-elements' },
    { id: 'form-elements', label: 'Form elements', icon: FileText, href: '#', isActive: activeItem === 'form-elements' },
    { id: 'charts', label: 'Charts', icon: BarChart3, href: '#', isActive: activeItem === 'charts' },
    { id: 'tables', label: 'Tables', icon: TableCells, href: '#', isActive: activeItem === 'tables' },
    { id: 'icons', label: 'Icons', icon: AppWindow, href: '#', isActive: activeItem === 'icons' },
    { id: 'user-pages', label: 'User Pages', icon: Users, href: '#', isActive: activeItem === 'user-pages' },
    { id: 'error-pages', label: 'Error pages', icon: ShieldAlert, href: '#', isActive: activeItem === 'error-pages' },
    { id: 'documentation', label: 'Documentation', icon: BookText, href: '#', isActive: activeItem === 'documentation' },
  ];

  const categoryItems: NavItemProps[] = [
    { id: 'sales', label: '#Sales', icon: Dot, href: '#', isCategory: true, color: 'hsl(var(--prd-accent-pink-val))' }, // Using pink for Sales from image
    { id: 'marketing', label: '#Marketing', icon: Dot, href: '#', isCategory: true, color: 'hsl(var(--prd-accent-green-val))' }, // Using green for Marketing
  ];

  return (
    <div
      className={cn(
        'h-screen bg-sidebar text-sidebar-foreground flex flex-col fixed top-0 left-0 transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-20' : 'w-64',
        className
      )}
    >
      {/* User Profile Section */}
      <div className={cn('p-4 border-b border-sidebar-foreground/10', isCollapsed ? 'h-[88px]' : 'h-auto')}>
        <div className={cn('flex items-center', isCollapsed && 'flex-col')}>
          <Avatar className={cn('h-10 w-10', isCollapsed && 'mb-2')}>
            <AvatarImage src="https://i.pravatar.cc/150?u=kennethosborne" alt="Kenneth Osborne" />
            <AvatarFallback>KO</AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div className="ml-3">
              <p className="text-sm font-semibold">Kenneth Osborne</p>
              <p className="text-xs text-sidebar-foreground/70">Welcome</p>
            </div>
          )}
        </div>
      </div>

      {/* Search Input */}
      {!isCollapsed && (
        <div className="p-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Type to search..."
              className="bg-sidebar-foreground/10 border-sidebar-foreground/20 placeholder-sidebar-foreground/50 text-sidebar-foreground focus:ring-primary"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-sidebar-foreground/50" />
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      <nav className="flex-grow px-2 py-4 space-y-1 overflow-y-auto">
        {!isCollapsed && <p className="px-4 py-2 text-xs text-sidebar-foreground/50 uppercase">Dash menu</p>}
        {navItems.map((item) => (
          <NavItem key={item.id} {...item} isActive={activeItem === item.id} isCollapsed={isCollapsed} />
        ))}
      </nav>

      {/* Category Section */}
      {!isCollapsed && (
        <div className="px-2 py-4 mt-auto border-t border-sidebar-foreground/10">
          <p className="px-4 py-2 text-xs text-sidebar-foreground/50 uppercase">Category</p>
          {categoryItems.map((item) => (
            <NavItem key={item.id} {...item} isCollapsed={isCollapsed} />
          ))}
        </div>
      )}
      
      {/* Collapse button - for demonstration, not in original image design for this specific view */}
      {/* <Button 
        variant="ghost"
        size="icon"
        className="absolute top-4 right-[-12px] bg-card text-card-foreground rounded-full z-20 border"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronRight className="h-4 w-4"/> : <ChevronLeft className="h-4 w-4"/>}
      </Button>*/}
    </div>
  );
};

export default SidebarNav;
