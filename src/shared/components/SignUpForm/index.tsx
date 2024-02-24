'use client';

import { SignUpUserInput, SignUpUserSchema } from '@/lib/validations/auth.schema';
import FormField from '@/shared/components/FormField';
import PasswordInput from '@/shared/components/PasswordInput';
import TextInput from '@/shared/components/TextInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Button from '../Button';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpUserInput>({
    resolver: zodResolver(SignUpUserSchema),
  });

  const handleSignUp = async (data: SignUpUserInput) => {
    console.log('DATA', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
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
        {/* <FormField
          htmlFor='confirmPassword'
          label='Confirm Password'
          className='grow'
        >
          <PasswordInput id='confirmPassword' placeholder='Enter Password' />
        </FormField> */}
      </div>
      <div className="flex flex-wrap mb-5 text-gray-700 text-[13px] items-center font-medium">
        <p>By clicking continue, I agree to the </p>
        <div className="cursor-pointer text-blue-300 ml-1">
          <Button label="Terms of Service" size="text" variant="basic" />
        </div>
      </div>
      <div className="mb-6 flex items-center justify-center">
        <Button type="submit" size="medium" className="w-full" label="Create account" />
      </div>
    </form>
  );
};

export default SignUpForm;
