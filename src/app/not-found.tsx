import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AuthNavBar from '@/shared/components/AuthNavBar';
import ROUTE from '@/app/routes';

export const metadata: Metadata = {
  title: 'BugTracker | Page not found',
  description: 'Track, identify, and swiftly fix bugs.',
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="container flex flex-col mx-auto max-w-7xl items-center gap-4 pt-2 text-center">
        <AuthNavBar />
        <div className="flex w-full items-center justify-center">
          <Image
            src="/images/404-error.svg"
            alt="Bug Tracker App"
            width={500}
            height={320}
            priority
          />
        </div>
        <div className="space-y-5 max-w-2xl">
          <h1 className="text-md md:text-4xl font-semibold">Page not found</h1>
          <p className="text-base font-medium">
            This page was not found. You may have mistyped the address or the page may have been moved.
          </p>
        </div>
        <Link href={ROUTE.home} className="bg-blue-300 py-2 px-8 text-white font-medium rounded-full">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
