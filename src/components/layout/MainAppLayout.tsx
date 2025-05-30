import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarCollapsed(prev => !prev);
  }, []);

  // Sidebar width: 'w-64' (16rem), collapsed 'w-20' (5rem).
  // Header height: 'h-16' (4rem).
  // These correspond to Tailwind classes ml-64, ml-20, mt-16.
  const mainContentMarginLeftClass = isSidebarCollapsed ? 'ml-20' : 'ml-64';
  const mainContentMarginTopClass = 'mt-16';

  return (
    <div className={cn('min-h-screen bg-background', className)}>
      {/* 
        Sidebar component renders SidebarNav from context.
        SidebarNav itself is `fixed top-0 left-0 h-screen` and manages its width.
        The `isSidebarCollapsed` prop passed to <Sidebar /> is for an ideal scenario
        where SidebarNav can be controlled by this state.
      */}
      <Sidebar isCollapsed={isSidebarCollapsed} />

      {/* 
        Header component renders TopHeader from context.
        TopHeader is `fixed top-0 ... z-10` (or z-30 from context code).
        Its `left` offset is dynamically set by the Header component based on `isSidebarCollapsed`.
      */}
      <Header 
        isSidebarCollapsed={isSidebarCollapsed} 
        onToggleSidebar={toggleSidebar} 
      />

      {/* 
        Main content area.
        It needs margin-top for the fixed Header and margin-left for the fixed Sidebar.
        The `p-6` and `flex flex-col gap-6` are from `Layout Requirements` for mainContent.
      */}
      <main
        className={cn(
          'min-w-0 overflow-y-auto transition-all duration-300 ease-in-out',
          mainContentMarginTopClass,  // Offset for fixed header
          mainContentMarginLeftClass, // Offset for fixed sidebar
          'p-6'                       // Padding for the content area itself
        )}
      >
        {/* This inner div matches 'mainContent.container' requirements: 'flex flex-col gap-6' */}
        <div className="flex flex-col gap-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
