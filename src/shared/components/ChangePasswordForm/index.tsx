import FormField from '@/shared/components/FormField';
import PasswordInput from '@/shared/components/PasswordInput';
import Button from '@/shared/components/Button';

const ChangePasswordForm = () => {
  return (
    <form>
      <div className="flex mb-3">
        <FormField htmlFor="oldPassword" label="Old Password" className="grow">
          <PasswordInput id="oldPassword" placeholder="Enter old password" />
        </FormField>
      </div>
      <div className="flex mb-3">
        <FormField htmlFor="newPassword" label="New Password" className="grow">
          <PasswordInput id="newPassword" placeholder="Enter new password" />
        </FormField>
      </div>
      <div className="flex mb-3">
        <FormField htmlFor="confirmPassword" label="Confirm Password" className="grow">
          <PasswordInput id="confirmPassword" placeholder="Confirm password" />
        </FormField>
      </div>
      <div className="flex mb-6 items-center justify-center">
        <Button type="submit" size="medium" className="w-full" label="Change Password" />
      </div>
    </form>
  );
};

export default ChangePasswordForm;
