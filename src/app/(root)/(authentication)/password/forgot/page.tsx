import Link from 'next/link';
import AuthSectionHeader from '@/shared/components/AuthSectionHeader';
import ForgotPasswordForm from '@/shared/components/ForgotPasswordForm';

const ForgotPassword = () => {
  return (
    <div>
      <AuthSectionHeader
        title="Forgot Password"
        subtitle="Enter your registered email address to receive password reset instructions."
      />
      <div>
        <ForgotPasswordForm />
      </div>
      <div className="flex text-gray-800 text-sm font-semibold items-center justify-center">
        Remember your Password?{' '}
        <Link href="/signin" className="text-blue-500 indent-1">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
