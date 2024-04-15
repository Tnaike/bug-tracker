import { authOptions } from '@/lib/auth';
import Button from '@/shared/components/Button';
import DashboardCardItem from '@/shared/components/DashboardCard/DashboardCardItem';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import addIcon from '/public/images/add-icon.svg';
import closedIcon from '/public/images/closed-issue.svg';
import newIcon from '/public/images/new-issue.svg';
import progressIcon from '/public/images/progress-check.svg';
import tagIcon from '/public/images/tag-icon.svg';

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="flex max-sm:flex-col sm:items-center sm:justify-between pt-4 gap-2">
        <div className="flex flex-col">
          <h2 className="text-md font-semibold">Welcome, {session?.user?.name.split(' ')[0]} 🎉</h2>
          <p className="flex text-xs text-slate-600">Manage your bugs, track progress, and collaborate.</p>
        </div>
        <Button
          href=""
          label="New Issue"
          variant="primary"
          size="small"
          className="max-sm:w-full"
          svgIcon={<Image src={addIcon} width={12} height={12} alt="bell-icon" priority className="mr-1.5" />}
        />
      </div>
      <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
        <DashboardCardItem iconSrc={tagIcon} color="bg-blue-200" title="Total Issues" value="30" alt="Total Issue" />
        <DashboardCardItem iconSrc={newIcon} color="bg-[#26bf94]" title="New Issues" value="10" alt="New Issue" />
        <DashboardCardItem
          iconSrc={progressIcon}
          color="bg-yellow-500"
          title="In-Progress Issues"
          value="8"
          alt="In-Progress Issue"
        />
        <DashboardCardItem
          iconSrc={closedIcon}
          color="bg-red-500"
          title="Closed Issues"
          value="12"
          alt="Closed Issue"
        />
      </div>
    </>
  );
};

export default DashboardPage;
