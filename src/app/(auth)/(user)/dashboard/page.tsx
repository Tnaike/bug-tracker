import Button from '@/shared/components/Button';
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
    </>
  );
};

export default DashboardPage;
