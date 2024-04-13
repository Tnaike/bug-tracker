'use client';

import ROUTE from '@/app/routes';
import { SignInUserInput, SignInUserSchema } from '@/lib/validations/auth.schema';
import Button from '@/shared/components/Button';
import FormErrorMessage from '@/shared/components/FormErrorMessage';
import FormField from '@/shared/components/FormField';
import PasswordInput from '@/shared/components/PasswordInput';
import TextInput from '@/shared/components/TextInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const SignInForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInUserInput>({
    resolver: zodResolver(SignInUserSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleFormSubmit = async (data: SignInUserInput) => {
    const signInData = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (signInData?.error) {
      setErrorMessage(signInData.error);
    } else {
      router.refresh();
      router.push(ROUTE.dashboard);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="flex mb-3">
          <FormField htmlFor="email" label="Email Address" className="grow" error={errors.email?.message}>
            <TextInput type="text" id="email" placeholder="Enter your email" {...register('email')} />
          </FormField>
        </div>
        <div className="flex gap-3 mb-2">
          <FormField htmlFor="password" label="Password" className="grow" error={errors.password?.message}>
            <PasswordInput id="password" placeholder="Enter your password" {...register('password')} />
          </FormField>
        </div>
        <div className="flex flex-wrap mb-6 text-sm items-center font-semibold justify-end">
          <Link href={ROUTE.forgotPassword} className="text-blue-500">
            <p>Forgot Password? </p>
          </Link>
        </div>
        {errorMessage && (
          <FormErrorMessage className="flex justify-center text-sm mb-3">{errorMessage}</FormErrorMessage>
        )}
        <div className="mb-6 flex items-center justify-center">
          <Button type="submit" size="medium" className="w-full" label="Proceed to Dashboard" />
        </div>
      </form>
    </>
  );
};

export default SignInForm;
