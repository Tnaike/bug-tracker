'use client';

import ROUTE from '@/app/routes';
import Button from '@/shared/components/Button';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import googleIcon from '/public/images/color-google-icon.svg';

const GoogleSignInButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signIn('google', { callbackUrl: ROUTE.dashboard });
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={loginWithGoogle}
      label="Sign in with Google"
      size="medium"
      className={`!p-0 !pr-6 !rounded-full !min-h-[41px] ${isLoading ? '!pl-4' : ''}`}
      isLoading={isLoading}
      svgIcon={
        <div className="p-2 bg-white rounded-full mr-4">
          <Image src={googleIcon} width={24} height={24} alt="google-icon" priority />
        </div>
      }
    />
  );
};

export default GoogleSignInButton;
