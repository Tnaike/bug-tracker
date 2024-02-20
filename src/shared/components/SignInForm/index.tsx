import FormField from '@/shared/components/FormField';
import PasswordInput from '@/shared/components/PasswordInput';
import TextInput from '@/shared/components/TextInput';
import React from 'react';

import Link from 'next/link';
import Button from '@/shared/components/Button';

const SignInForm = () => {
  return (
    <form>
      <div className="flex mb-3">
        <FormField htmlFor="email" label="Email Address" className="grow">
          <TextInput type="text" id="email" placeholder="Enter your email" />
        </FormField>
      </div>
      <div className="flex gap-3 mb-2">
        <FormField htmlFor="password" label="Password" className="grow">
          <PasswordInput id="password" placeholder="Enter your password" />
        </FormField>
      </div>
      <div className="flex flex-wrap mb-6 text-sm items-center font-semibold justify-end">
        <Link href="/forgotPassword" className="text-blue-500">
          <p>Forgot Password? </p>
        </Link>
      </div>
      <div className="mb-6 flex items-center justify-center">
        <Button type="submit" size="medium" className="w-full" label="Proceed to Dashboard" />
      </div>
    </form>
  );
};

export default SignInForm;
