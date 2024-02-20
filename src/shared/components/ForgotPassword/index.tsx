import FormField from '@/shared/components/FormField';
import TextInput from '@/shared/components/TextInput';
import Button from '@/shared/components/Button';

const ForgotPasswordForm = () => {
  return (
    <form>
      <div className="flex mb-3">
        <FormField htmlFor="email" label="Email Address" className="grow">
          <TextInput type="text" id="email" placeholder="Enter your email" />
        </FormField>
      </div>
      <div className="mb-6 flex items-center justify-center">
        <Button type="submit" size="medium" className="w-full" label="Reset Password" />
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
