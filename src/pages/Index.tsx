import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageHeader from '../components/Dashboard/PageHeader';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import RevenueChart from '../components/Dashboard/RevenueChart';
import DeviceStats from '../components/Dashboard/DeviceStats';
import SessionsList from '../components/Dashboard/SessionsList';
import EventChart from '../components/Dashboard/EventChart';

const DashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* PageHeader component with props matching the image, or relying on its defaults */}
      <PageHeader 
        title="Kenneth Osborne" 
        subtitle="Your last login: 21h ago from newzealand."
      />
      
      {/* StatsCardGrid component, displays 4 stat cards in a row */}
      <StatsCardGrid />
      
      {/* Main content area below stats cards, arranged in a responsive grid layout. */}
      {/* This grid will be a direct child of MainAppLayout's content container which is flex-col. */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        
        {/* Left Column: Occupies 3/5ths of the width on large screens (lg and up) */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {/* RevenueChart (Sales Analytics in the image) is placed here. */}
          <RevenueChart />
          {/* 
            SessionsList (Employee Performance This Month) is placed below RevenueChart in this column,
            reflecting a common pattern or the visual flow from the image where a list related to sessions/users
            is present in the main content area.
          */}
          <SessionsList /> 
        </div>

        {/* Right Column: Occupies 2/5ths of the width on large screens (lg and up) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* EventChart and DeviceStats are placed in this column, similar to image's right-hand side. */}
          <EventChart />
          <DeviceStats />
        </div>
      </div>
      
      {/* 
        Note: Components from the image not specified in the 'Component Hierarchy' input
        (e.g., the "Sessions By Channel" donut chart, "Card Title" bar chart at the bottom right)
        are not included, as per the task to use only provided/specified components.
        All data for the rendered components is self-contained within them, as defined in their respective context files.
      */}
    </MainAppLayout>
  );
};

export default DashboardPage;
