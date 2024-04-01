'use Client';

import Image from 'next/image';
import React from 'react';

interface DashboardHeaderProps {
  children?: React.ReactNode;
}

const DashboardHeader = ({ children }: DashboardHeaderProps) => {
  return (
    <div className="flex bg-white">
      <div className="flex item-center justify-between px-4 md:px-6 md:py-4 grow">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <div className="flex item-center space-x-5">
          <button className="cursor-pointer">
            <Image src="/images/dashboard-settings.svg" width={20} height={20} alt="settings-icon" priority />
          </button>
          <button type="button" className="relative">
            <Image src="/images/dashboard-bell.svg" width={20} height={20} alt="bell-icon" priority />
            <span className="absolute flex size-2 top-0.5 left-[14px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </button>
          <button type="button" className="flex items-center space-x-2 max-w-44">
            <Image
              className="rounded-full object-cover"
              src="/images/user-avatar.svg"
              width={30}
              height={30}
              alt="user-avatar"
              priority
            />
            <div className="flex grow text-[13px] text-gray-600 font-semibold truncate">
              <span>Timilehin Adenaike</span>
            </div>
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default DashboardHeader;
