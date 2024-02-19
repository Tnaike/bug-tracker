import AuthSectionHeader from '@/shared/components/AuthSectionHeader';
import SignUpForm from '@/shared/components/SignUpForm';
import Link from 'next/link';

const SignIn = () => {
  return (
    <div>
      <AuthSectionHeader title="Welcome Back!" subtitle="Please enter your login details to access your account" />
      <div>{/* <SignInForm /> */}</div>
      <div className="text-gray-800 text-sm font-semibold items-center">
        Don't have a BugTracker Account?{' '}
        <Link href="/signup" className="text-blue-500">
          Sign Up Now
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
