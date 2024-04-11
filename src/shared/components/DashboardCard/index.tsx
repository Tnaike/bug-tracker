import { cn } from '@/utils/utilHelper';
import React from 'react'

interface DashboardCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function DashboardCard({children, className}: DashboardCardProps) {
  return (
    <div className={cn(`flex bg-white w-full p-5 shadow-[0_1px_20px_0_rgb(0_0_0_/_10%)] rounded-xl`, className)}>
      {children}
    </div>
  );
}
