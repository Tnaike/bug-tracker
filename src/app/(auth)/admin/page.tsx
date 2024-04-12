import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex max-sm:flex-col sm:items-center sm:justify-between pt-4 gap-2">
      <div className="flex flex-col">
        <h2 className="text-md font-semibold">Welcome, Admin 🎉</h2>
        <p className="flex text-xs text-slate-600">Manage your bugs, track progress, and collaborate.</p>
      </div>
    </div>
  );
};

export default page;
