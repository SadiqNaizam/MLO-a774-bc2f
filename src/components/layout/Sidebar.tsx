import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  isCollapsed: boolean; // This prop is intended to control the sidebar's collapsed state.
                       // The SidebarNav from context manages its own state. For this prop to take effect,
                       // SidebarNav would need to be modified to accept and use it.
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, className }) => {
  // The SidebarNav component (from context) is expected to handle its own styling,
  // including `fixed` positioning, `bg-sidebar`, and dynamic width ('w-64' or 'w-20')
  // based on its internal state.
  // Passing `isCollapsed` here assumes SidebarNav could be adapted to be controlled externally.
  // If SidebarNav ignores this prop, its collapse will be independent of MainAppLayout's state.
  return <SidebarNav className={cn(className)} />;
  // To make `isCollapsed` effective, SidebarNav should be like:
  // const SidebarNav = ({ isCollapsed: propIsCollapsed }) => { ... use propIsCollapsed ... }
};

export default Sidebar;
