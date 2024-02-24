import Link from 'next/link';
import ROUTE from '@/app/routes';

const Footer = () => {
  return (
    <footer className="top-0 w-full bg-white pt-5">
      <div className="flex-col container w-full items-center justify-center py-4 mx-auto">
        <ul className="sm:flex px-4 items-center justify-center text-xs mb-2">
          <li className="px-4 max-sm:py-1 sm:border-r hover:text-blue-300">
            <Link href={ROUTE.home}>BugTracker Home</Link>
          </li>
          <li className="px-4 max-sm:py-1 sm:border-r hover:text-blue-300">
            <Link href="/">About BugTracker</Link>
          </li>
          <li className="px-4 max-sm:py-1 sm:border-r hover:text-blue-300">
            <Link href={ROUTE.terms}>Terms of Service</Link>
          </li>
          <li className="px-4 max-sm:py-1 sm:border-r hover:text-blue-300">
            <Link href={ROUTE.privacy}>Privacy Policy</Link>
          </li>
          <li className="px-4 max-sm:py-1 hover:text-blue-300">
            <Link href="/">Support</Link>
          </li>
        </ul>
        <div className="flex items-center justify-center text-xs py-4 px-4 mt-5 border-t pb-0">
          <p>© 2024 BugTracker. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
