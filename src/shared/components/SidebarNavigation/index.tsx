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
      <div className="h-screen mt-16 pt-10 pb-20 no-scrollbar overflow-y-auto"> </div>
    </div>
  );
};

export default SidebarNavigation;
