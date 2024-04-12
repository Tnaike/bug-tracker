import Image from 'next/image';
import DashboardCard from '.';

interface DashboardCardProps {
  color: string;
  title: string;
  value: string;
  alt: string;
  iconSrc: string;
}

export default function DashboardCardItem({ color, title, value, alt, iconSrc }: DashboardCardProps) {
  return (
    <DashboardCard>
      <div className="flex items-center justify-between py-2">
        <div className={`flex items-center justify-center size-12 rounded-full ${color}`}>
          <Image src={iconSrc} width={28} height={28} alt={alt} />
        </div>
        <div className="flex-col flex-grow ms-4 space-y-0.5">
          <h2 className="text-sm text-slate-600">{title}</h2>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      </div>
    </DashboardCard>
  );
}
