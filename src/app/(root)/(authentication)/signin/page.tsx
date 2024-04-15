import ROUTE from '@/app/routes';
import AuthSectionHeader from '@/shared/components/AuthSectionHeader';
import GoogleSignInButton from '@/shared/components/GoogleSignInButton';
import SignInForm from '@/shared/components/SignInForm';
import Link from 'next/link';

const SignIn = () => {
  return (
    <div>
      <AuthSectionHeader title="Welcome Back!" subtitle="Please enter your login details to access your account" />
      <div className="flex my-4">
        <GoogleSignInButton />
      </div>
      <p className="flex my-6 font-semibold">or use your email to sign-in</p>
      <div>
        <SignInForm />
      </div>
      <div className="flex text-gray-800 text-sm font-semibold items-center justify-center">
        Don&apos;t have a BugTracker Account?{' '}
        <Link href={ROUTE.signUp} className="text-blue-500 indent-1">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
