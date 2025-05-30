import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../Dashboard/TopHeader'; // Context component

interface HeaderProps {
  isSidebarCollapsed: boolean;
  onToggleSidebar: () => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  isSidebarCollapsed,
  onToggleSidebar,
  className,
}) => {
  // TopHeader from context has: h-16, bg-card, fixed top-0 right-0, z-30, border-b
  // Default styling in TopHeader.tsx: 'left-0 md:left-64'.
  // We need to make the 'md:left-64' part dynamic based on isSidebarCollapsed.
  // The `left-0` is for mobile (full width basically, or to the edge of screen).
  // On medium screens and up (`md:`), the left offset should depend on the sidebar width.
  const dynamicLeftClass = isSidebarCollapsed ? 'md:left-20' : 'md:left-64'; // w-20 (5rem), w-64 (16rem)

  return (
    <TopHeader
      onToggleSidebar={onToggleSidebar}
      className={cn(
        // Default classes from TopHeader.tsx will be applied first.
        // These specific classes should override the md:left-64 from TopHeader if correctly applied.
        // Tailwind merges classes, and typically the last one for a given property at a breakpoint wins.
        // To be absolutely sure, TopHeader could be modified to not set md:left internally,
        // or we ensure these utility classes are specific enough.
        'transition-all duration-300 ease-in-out',
        dynamicLeftClass, // Applies md:left-20 or md:left-64
        className
      )}
    />
  );
};

export default Header;
