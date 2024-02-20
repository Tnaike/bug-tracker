import Image from 'next/image';
import Link from 'next/link';

function AuthNavBar() {
  return (
    <header className="bg-transparent w-full z-30 mb-5">
      <div className="flex items-center min-h-[4rem] max-sm:justify-center">
        <Link href="/">
          <Image
            className="relative"
            src="/images/bugTracker-logo.png"
            alt="Bug Tracker App"
            width={180}
            height={50}
            priority
          />
        </Link>
      </div>
    </header>
  );
}

export default AuthNavBar;
