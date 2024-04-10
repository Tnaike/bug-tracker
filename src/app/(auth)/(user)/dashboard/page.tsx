import Button from '@/shared/components/Button';
import DashboardCard from '@/shared/components/DashboardCard';
import Image from 'next/image';
import addIcon from '/public/images/add-icon.svg';

const DashboardPage = async () => {
  return (
    <>
      <div className="flex items-center justify-between pt-4">
        <div className="flex flex-col">
          <h2 className="text-md font-semibold">Welcome, Tommy 🎉</h2>
          <p className="flex text-xs text-slate-600">Manage your bugs, track progress, and collaborate.</p>
        </div>
        <Button
          href=""
          label="New Issue"
          variant="primary"
          size="small"
          svgIcon={<Image src={addIcon} width={12} height={12} alt="bell-icon" priority className="mr-1.5" />}
        />
      </div>
      <div className="grid sm:gap-4 sm:grid-cols-2 md:grid-cols-4 mt-8">
        <DashboardCard>
          <div className="flex items-start justify-between py-2">
            <div className="flex items-center justify-center size-10 bg-blue-200 rounded-md">
              <Image src="/images/tag-icon.svg" width={20} height={20} alt="Total Issue" />
            </div>
            <div className="flex-col flex-grow ms-4 space-y-1">
              <h2 className="text-sm text-slate-400">Total Issues</h2>
              <p className="text-[#363636] text-2xl font-semibold">30</p>
            </div>
          </div>
        </DashboardCard>
        <DashboardCard>
          <div className="flex items-start justify-between py-2">
            <div className="flex items-center justify-center size-10 bg-[#26bf94] rounded-md">
              <Image src="/images/tag-icon.svg" width={20} height={20} alt="New Issue" />
            </div>
            <div className="flex-col flex-grow ms-4 space-y-1">
              <h2 className="text-sm text-slate-400">New Issues</h2>
              <p className="text-[#363636] text-2xl font-semibold">30</p>
            </div>
          </div>
        </DashboardCard>
        <DashboardCard>
          <div className="flex items-start justify-between py-2">
            <div className="flex items-center justify-center size-10 bg-orange-300 rounded-md">
              <Image src="/images/tag-icon.svg" width={20} height={20} alt="In-Progress Issue" />
            </div>
            <div className="flex-col flex-grow ms-4 space-y-1">
              <h2 className="text-sm text-slate-400">In-Progess Issues</h2>
              <p className="text-[#363636] text-2xl font-semibold">30</p>
            </div>
          </div>
        </DashboardCard>
        <DashboardCard>
          <div className="flex items-start justify-between py-2">
            <div className="flex items-center justify-center size-10 bg-red-400 rounded-md">
              <Image src="/images/tag-icon.svg" width={20} height={20} alt="Closed Issue" />
            </div>
            <div className="flex-col flex-grow ms-4 space-y-1">
              <h2 className="text-sm text-slate-400">Closed Issues</h2>
              <p className="text-[#363636] text-2xl font-semibold">30</p>
            </div>
          </div>
        </DashboardCard>
      </div>
    </>
  );
};

export default DashboardPage;
