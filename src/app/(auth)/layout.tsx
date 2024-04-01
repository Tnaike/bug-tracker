import DashboardHeader from '@/shared/components/DashboardHeader';
import React from 'react';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="fixed top-0 ml-[250px] w-[calc(100%-250px)] max-w-[100vw] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.07)] transition-all z-20">
        <DashboardHeader />
      </div>
      <div className="h-full grow px-4 md:px-6 pt-20 pb-16 bg-slate-50 ml-[250px]">{children}</div>
    </>
  );
};

export default UserLayout;
