import { cn } from '@/utils/utilHelper';
import React from 'react'

interface DashboardCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function DashboardCard({children, className}: DashboardCardProps) {
  return <div className={cn(`flex bg-white w-full p-5 shadow-xl rounded-xl`, className)}>{children}</div>;
}
