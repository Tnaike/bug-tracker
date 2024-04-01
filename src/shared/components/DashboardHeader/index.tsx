'use Client';

import Image from 'next/image';
import React from 'react';

interface DashboardHeaderProps {
  children?: React.ReactNode;
}

const DashboardHeader = ({ children }: DashboardHeaderProps) => {
  return (
    <div className="flex bg-white">
      <div className="flex items-center justify-between px-4 py-2 md:px-6 md:py-4 grow gap-2">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <div className="flex items-center gap-1.5">
          <button type="button" className="flex items-center justify-center size-9 rounded-full hover:bg-sky-100">
            <Image src="/images/dashboard-settings.svg" width={20} height={20} alt="settings-icon" priority />
          </button>
          <button
            type="button"
            className="relative flex items-center justify-center size-9 rounded-full hover:bg-sky-100"
          >
            <Image src="/images/dashboard-bell.svg" width={20} height={20} alt="bell-icon" priority />
            <span className="absolute flex size-2 top-0.5 left-[22px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </button>
          <button type="button" className="flex items-center space-x-2 max-w-44 ml-3">
            <Image
              className="rounded-full object-cover"
              src="/images/user-avatar.svg"
              width={34}
              height={34}
              alt="user-avatar"
              priority
            />
            <div className="flex flex-col items-start grow text-xs text-gray-600 font-semibold leading-none truncate">
              <span>Tommy Naike</span>
              <span className="text-xxs text-gray-600 font-normal">Bug Manager</span>
            </div>
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default DashboardHeader;
