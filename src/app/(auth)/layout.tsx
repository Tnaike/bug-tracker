import DashboardHeader from '@/shared/components/DashboardHeader';
import SidebarNavigation from '@/shared/components/SidebarNavigation';
import React from 'react';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarNavigation />
      <div className="fixed max-md:w-full top-0 md:ml-[250px] md:w-[calc(100%-250px)] max-w-[100vw] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.07)] z-10">
        <DashboardHeader />
      </div>
      <div className="h-full grow px-4 md:px-6 md:pt-20 pt-16 pb-16 bg-slate-50 md:ml-[250px]">{children}</div>
    </>
  );
};

export default UserLayout;
