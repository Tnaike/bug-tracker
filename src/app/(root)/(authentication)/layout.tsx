import AuthNavBar from '@/shared/components/AuthNavBar';
import Image from 'next/image';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="relative flex min-h-screen">
        <div className="w-3/5 max-sm:hidden overflow-hidden">
          <div className="flex h-full flex-col bg-slate-50">
            <div className="relative h-full overflow-hidden">
              <Image
                className="absolute h-full w-full"
                src="/images/software-code-testing.svg"
                alt="Login Banner"
                width={500}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 sm:min-w-96 max-sm:px-8 px-16 overflow-auto">
          <div className="flex flex-col h-full w-full">
            <div className="relative min-h-16">
              <AuthNavBar />
            </div>
            <div className="mb-6 flex flex-grow flex-col items-center justify-center">
              <div className="flex w-full flex-col gap-4">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
