import Image from 'next/image';

const SidebarNavigation = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-[250px] bg-[#0c183d] border-r border-r-blue-950 md:rounded-tr-3xl">
      <div className="fixed w-[inherit] flex justify-center p-3 border-b border-b-[#02040b]">
        <Image
          className="object-fit"
          src="/images/bug-tracker-logo-w.png"
          alt="BugTracker Logo"
          width={150}
          height={44}
          priority
        />
      </div>
      <nav className='flex flex-col mt-16 pt-2 pb-10'></nav>
    </div>
  );
};

export default SidebarNavigation;
