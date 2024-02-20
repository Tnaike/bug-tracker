import FormField from '@/shared/components/FormField';
import TextInput from '@/shared/components/TextInput';
import Button from '@/shared/components/Button';

const ForgotPasswordForm = () => {
  return (
    <form>
      <div className="flex mb-6">
        <FormField htmlFor="email" label="Email Address" className="grow">
          <TextInput type="text" id="email" placeholder="Enter email address" />
        </FormField>
      </div>
      <div className="flex mb-6 items-center justify-center">
        <Button type="submit" size="medium" className="w-full" label="Reset Password" />
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
