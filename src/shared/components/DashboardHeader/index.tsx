'use Client';

import Image from 'next/image';

interface DashboardHeaderProps {
  onToggleSidebar: () => void;
}

const DashboardHeader = ({ onToggleSidebar }: DashboardHeaderProps) => {
  return (
    <div className="flex bg-white">
      <div className="flex items-center justify-between px-4 py-2.5 md:px-6 md:py-4 grow gap-2">
        <h2 className="text-2xl font-semibold max-md:hidden">Dashboard</h2>
        <div className="flex items-center md:!hidden space-x-4">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="relative flex items-center justify-center size-9 !rounded-full hover:bg-slate-100"
          >
            <span className="sr-only">Open</span>
            <Image src="/images/menu-icon.svg" width={25} height={25} alt="Menu" priority />
          </button>
          <Image src="/images/bugTracker-logo.png" width={107} height={30} alt="Menu" priority />
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            className="flex items-center justify-center size-9 !rounded-full hover:bg-sky-100 max-md:!hidden"
          >
            <Image src="/images/dashboard-settings.svg" width={20} height={20} alt="settings-icon" priority />
          </button>
          <button
            type="button"
            className="relative flex items-center justify-center size-9 !rounded-full hover:bg-sky-100"
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
            <div className="flex flex-col items-start grow text-xs text-gray-600 font-semibold leading-none truncate max-md:hidden">
              <span>Tommy Naike</span>
              <span className="text-xxs text-gray-600 font-normal">Bug Manager</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
