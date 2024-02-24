'use client';

import ROUTE from '@/app/routes';
import { SignInUserInput, SignInUserSchema } from '@/lib/validations/auth.schema';
import Button from '@/shared/components/Button';
import FormField from '@/shared/components/FormField';
import PasswordInput from '@/shared/components/PasswordInput';
import TextInput from '@/shared/components/TextInput';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInUserInput>({
    resolver: zodResolver(SignInUserSchema),
  });

  const handleFormSubmit = async (data: SignInUserInput) => {
    console.log('DATA', data);
  };

  return (
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
      <div className="mb-6 flex items-center justify-center">
        <Button type="submit" size="medium" className="w-full" label="Proceed to Dashboard" />
      </div>
    </form>
  );
};

export default SignInForm;
