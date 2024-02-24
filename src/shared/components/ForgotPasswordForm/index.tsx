'use client';

import { ForgotPasswordInput, ForgotPasswordSchema } from '@/lib/validations/auth.schema';
import Button from '@/shared/components/Button';
import FormField from '@/shared/components/FormField';
import TextInput from '@/shared/components/TextInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const handleForgotPassword = async (data: ForgotPasswordInput) => {
    console.log('DATA', data);
  };

  return (
    <form onSubmit={handleSubmit(handleForgotPassword)}>
      <div className="flex mb-6">
        <FormField htmlFor="email" label="Email Address" className="grow" error={errors.email?.message}>
          <TextInput type="text" id="email" placeholder="Enter email address" {...register('email')} />
        </FormField>
      </div>
      <div className="flex mb-6 items-center justify-center">
        <Button type="submit" size="medium" className="w-full" label="Reset Password" />
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
