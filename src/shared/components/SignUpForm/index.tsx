'use client';

import ROUTE from '@/app/routes';
import { SignUpUserInput, SignUpUserSchema } from '@/lib/validations/auth.schema';
import Button from '@/shared/components/Button';
import FormErrorMessage from '@/shared/components/FormErrorMessage';
import FormField from '@/shared/components/FormField';
import PasswordInput from '@/shared/components/PasswordInput';
import TextInput from '@/shared/components/TextInput';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const SignUpForm = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpUserInput>({
    resolver: zodResolver(SignUpUserSchema),
  });

  const handleFormSignUp = async (data: SignUpUserInput) => {
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          name: `${data.firstName} ${data.lastName}`,
          password: data.password,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      router.push(ROUTE.signIn);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSignUp)}>
      <div className="flex max-sm:flex-col max-sm:gap-3 gap-4 mb-3">
        <FormField htmlFor="firstName" label="First Name" className="grow" error={errors.firstName?.message}>
          <TextInput type="text" id="firstName" placeholder="Enter first name" {...register('firstName')} />
        </FormField>
        <FormField htmlFor="lastName" label="Last Name" className="grow" error={errors.lastName?.message}>
          <TextInput type="text" id="lastName" placeholder="Enter last name" {...register('lastName')} />
        </FormField>
      </div>
      <div className="flex mb-3">
        <FormField htmlFor="email" label="Email Address" className="grow" error={errors.email?.message}>
          <TextInput type="text" id="email" placeholder="Enter email address" {...register('email')} />
        </FormField>
      </div>
      <div className="flex max-sm:flex-col gap-3 mb-5">
        <FormField htmlFor="password" label="Password" className="grow" error={errors.password?.message}>
          <PasswordInput id="password" placeholder="Enter password" {...register('password')} />
        </FormField>
      </div>
      <div className="flex flex-wrap mb-5 text-gray-700 text-[13px] items-center font-medium">
        <p>
          By clicking continue, I agree to the{' '}
          <Link href={ROUTE.terms} className="text-blue-300">
            Terms of Service
          </Link>
        </p>
      </div>
      {errorMessage && <FormErrorMessage className="flex justify-center text-sm mb-3">{errorMessage}</FormErrorMessage>}
      <div className="mb-6 flex items-center justify-center">
        <Button type="submit" size="medium" className="w-full" label="Create account" />
      </div>
    </form>
  );
};

export default SignUpForm;
