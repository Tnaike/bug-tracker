import AuthSectionHeader from '@/shared/components/AuthSectionHeader';
import SignUpForm from '@/shared/components/SignUpForm';
import Link from 'next/link';

const SignUp = () => {
  return (
    <div>
      <AuthSectionHeader title="Sign up for an Account" subtitle="Start using BugTracker in seconds!" />
      <div>
        <SignUpForm />
      </div>
      <div className="flex text-gray-800 text-sm font-semibold items-center justify-center">
        Have a BugTracker Account?
        <Link href="/signin" className="text-blue-500 indent-1">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
