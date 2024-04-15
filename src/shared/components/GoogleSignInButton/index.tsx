'use client';

import ROUTE from '@/app/routes';
import Button from '@/shared/components/Button';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import googleIcon from '/public/images/color-google-icon.svg';

const GoogleSignInButton = () => {
  const loginWithGoogle = () => {
    signIn('google', { callbackUrl: ROUTE.dashboard });
  };

  return (
    <Button
      onClick={loginWithGoogle}
      label="Sign in with Google"
      size="medium"
      className='!p-0 !pr-6 !rounded-full'
      svgIcon={
        <div className="p-2 bg-white rounded-full mr-4">
          <Image src={googleIcon} width={24} height={24} alt="google-icon" priority />
        </div>
      }
    />
  );
};

export default GoogleSignInButton;
