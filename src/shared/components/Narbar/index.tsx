'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type NavBarProps = {
  children?: React.ReactNode;
};

const NavBar = ({ children }: NavBarProps) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);

    const body = document.body;
    body.style.overflow = isMobileNavOpen ? 'auto' : 'hidden';
  };

  return (
    <header className={`${isMobileNavOpen && 'max-sm:h-full'} sticky max-sm:fixed top-0 z-30 w-full bg-white shadow-[0_1px_3px_rgba(0,0,0,.05)]`}>
      <div className='flex max-sm:flex-col container md:container w-full justify-between align-middle px-4 md:px-8 py-4 mx-auto'>
        <div className='flex items-center justify-between'>
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
          <div className='md:hidden flex items-center'>
            <button onClick={toggleMobileNav}>
              <Image
                className='relative'
                src='/images/hambuger.svg'
                alt='BugTracker Logo'
                width={28}
                height={28}
                priority
              />
            </button>
          </div>
        </div>

        <div
          className={`${
            isMobileNavOpen ? 'flex-col' : 'hidden'
          } md:flex max-sm:mt-4 max-sm:px-1 items-center gap-10`}
        >
          <nav className='md:flex items-center space-x-6 max-sm:mb-3'>
            <ul className='flex max-sm:flex-col gap-6 max-sm:gap-1 font-medium'>
              <li className='py-1.5 hover:text-blue-300'>
                <Link href='/'>Features</Link>
              </li>
              <li className='py-1.5 hover:text-blue-300'>
                <Link href='/'>Pricing</Link>
              </li>
              <li className='py-1.5 hover:text-blue-300'>
                <Link href='/'>Docs</Link>
              </li>
            </ul>
          </nav>
          <div>{children}</div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
