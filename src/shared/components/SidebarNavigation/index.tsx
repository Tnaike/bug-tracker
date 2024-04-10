import ROUTE from '@/app/routes';
import Navigation from '@/shared/components/Navigation';
import NavigationItem from '@/shared/components/Navigation/NavigationItem';
import Image from 'next/image';
import Button from '@/shared/components/Button';

interface SidebarNavigationProps {
  isOpen: boolean;
}

const SidebarNavigation = ({ isOpen }: SidebarNavigationProps) => {
  return (
    <div
      className={`fixed left-0 top-0 h-screen w-[250px] bg-[#0c183d] border-r border-r-blue-950 md:rounded-tr-3xl z-20 duration-200 ${isOpen ? 'translate-x-0' : 'max-md:-translate-x-full'}`}
    >
      <div className="fixed flex w-[inherit] items-center p-3 px-6 border-b border-b-[#02040b]">
        <Image
          className="object-fit max-md:w-32"
          src="/images/bug-tracker-logo-x.svg"
          alt="BugTracker Logo"
          width={150}
          height={44}
          priority
        />
      </div>
      <div className="relative h-screen mt-16 md:pt-10 pt-5 pb-20 no-scrollbar overflow-y-auto">
        <Navigation>
          <NavigationItem href={ROUTE.dashboard}>
            <Image src="/images/dashboard-icon.svg" alt="Dashboard icon" width={24} height={24} priority />
            <p className="text-base font-medium">Dashboard</p>
          </NavigationItem>
          <NavigationItem href={ROUTE.profile}>
            <Image src="/images/profile-icon.svg" alt="Profile icon" width={24} height={24} priority />
            <p className="text-base font-medium">Profile</p>
          </NavigationItem>
          <NavigationItem href={ROUTE.tasks}>
            <Image src="/images/task-list.svg" alt="Task icon" width={24} height={24} priority />
            <p className="text-base font-medium">Task</p>
          </NavigationItem>
          <NavigationItem href={ROUTE.tasks}>
            <Image src="/images/bug-icon.svg" alt="Report icon" width={24} height={24} priority />
            <p className="text-base font-medium">Bug Report</p>
          </NavigationItem>
          <NavigationItem href={ROUTE.tasks}>
            <Image src="/images/settings-icon.svg" alt="Report icon" width={24} height={24} priority />
            <p className="text-base font-medium">Settings</p>
          </NavigationItem>
          <NavigationItem asButton>
            <Image src="/images/logout-icon.svg" alt="Sign-out icon" width={24} height={24} priority />
            <p className="text-base font-medium">Log Out</p>
          </NavigationItem>
          <div className="mx-6 mb-5 mt-16 md:mt-14 rounded-2xl bg-blue-700 p-6 space-y-3 text-white">
            <p className="text-base font-bold text-center">BugTracker Pro</p>
            <p className="text-sm font-medium text-center">Get access to all Features!</p>
            <Button
              label="Get Pro"
              variant="info"
              className="w-full !bg-white !text-blue-800 !py-1.5 px-4 !font-bold !rounded-full !text-base hover:!bg-sky-100 !border-white"
            />
          </div>
        </Navigation>
      </div>
    </div>
  );
};

export default SidebarNavigation;
