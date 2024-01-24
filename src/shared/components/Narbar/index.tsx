import Image from 'next/image';
import Link from 'next/link';

type NavBarProps = {
  children?: React.ReactNode;
};

const NavBar = ({ children }: NavBarProps) => {
  return (
    <header className='sticky top-0 z-30 w-full bg-white'>
      <div className='flex container md:container h-16 w-full justify-between align-middle sm:px-2 md:px-8 mx-auto'>
        <div className='flex items-center'>
          <Link href='/'>
            <Image
              className='relative'
              src='/images/bugTracker-logo.png'
              alt='BugTracker Logo'
              width={170}
              height={44}
              priority
            />
          </Link>
        </div>
        {children}
      </div>
    </header>
  );
};

export default NavBar;
