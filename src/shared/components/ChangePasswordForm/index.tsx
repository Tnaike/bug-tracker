'use client';

import { ChangePasswordInput, ChangePasswordSchema } from '@/lib/validations/auth.schema';
import Button from '@/shared/components/Button';
import FormField from '@/shared/components/FormField';
import PasswordInput from '@/shared/components/PasswordInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordInput>({
    resolver: zodResolver(ChangePasswordSchema),
  });

  const handleChangePassword = async (data: ChangePasswordInput) => {
    console.log('DATA', data);
  };

  return (
    <form onSubmit={handleSubmit(handleChangePassword)}>
      <div className="flex mb-3">
        <FormField htmlFor="oldPassword" label="Old Password" className="grow" error={errors.oldPassword?.message}>
          <PasswordInput id="oldPassword" placeholder="Enter old password" {...register('oldPassword')} />
        </FormField>
      </div>
      <div className="flex mb-3">
        <FormField htmlFor="newPassword" label="New Password" className="grow" error={errors.newPassword?.message}>
          <PasswordInput id="newPassword" placeholder="Enter new password" {...register('newPassword')} />
        </FormField>
      </div>
      <div className="flex mb-3">
        <FormField
          htmlFor="confirmPassword"
          label="Confirm Password"
          className="grow"
          error={errors.confirmPassword?.message}
        >
          <PasswordInput id="confirmPassword" placeholder="Confirm password" {...register('confirmPassword')} />
        </FormField>
      </div>
      <div className="flex mb-6 items-center justify-center">
        <Button type="submit" size="medium" className="w-full" label="Change Password" />
      </div>
    </form>
  );
};

export default ChangePasswordForm;
