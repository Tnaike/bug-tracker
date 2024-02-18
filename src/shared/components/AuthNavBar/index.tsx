import Image from 'next/image';
import Link from 'next/link';

function AuthNavBar() {
  return (
    <header className='absolute z-30 w-full bg-transparent'>
      <div className='flex items-center min-h-[4rem]'>
        <Link href='/'>
          <Image
            className='relative'
            src='/images/landing-bg.svg'
            alt='Bug Tracker App'
            width={1000}
            height={982}
            priority
          />
        </Link>
      </div>
    </header>
  );
}

export default AuthNavBar;
