import ROUTE from '@/app/routes';
import Navigation from '@/shared/components/Navigation';
import NavigationItem from '@/shared/components/Navigation/NavigationItem';
import Image from 'next/image';

const SidebarNavigation = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-[250px] bg-[#0c183d] border-r border-r-blue-950 md:rounded-tr-3xl z-20">
      <div className="fixed flex w-[inherit] items-center p-3 px-6 border-b border-b-[#02040b]">
        <Image
          className="object-fit"
          src="/images/bug-tracker-logo-w.png"
          alt="BugTracker Logo"
          width={150}
          height={44}
          priority
        />
      </div>
      <div className="h-screen mt-16 pt-10 pb-20 no-scrollbar overflow-y-auto">
        <Navigation>
          <NavigationItem href={ROUTE.dashboard}>
            <Image src="/images/dashboard-icon.svg" alt="Dashboard icon" width={24} height={24} priority />
            <p className="text-base font-medium">Dashboard</p>
          </NavigationItem>
          <NavigationItem href={ROUTE.profile}>
            <Image src="/images/user-icon.svg" alt="Profile icon" width={24} height={24} priority />
            <p className="text-base font-medium">Profile</p>
          </NavigationItem>
          <NavigationItem href={ROUTE.tasks}>
            <Image src="/images/task-list.svg" alt="Task icon" width={24} height={24} priority />
            <p className="text-base font-medium">Task</p>
          </NavigationItem>
        </Navigation>
      </div>
    </div>
  );
};

export default SidebarNavigation;
