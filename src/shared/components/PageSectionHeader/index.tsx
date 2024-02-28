import React from 'react'

interface PageSectionHeaderProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const PageSectionHeader = ({title, subtitle, children}: PageSectionHeaderProps) => {
  return (
    <div className='relative py-28 px-3 bg-zinc-800 min-h-24 text-center'>
      {title && <h1 className="text-lg md:text-4xl font-semibold mb-2 text-white">{title}</h1>}
      {subtitle && <p className="text-base text-slate-50 mb-6">{subtitle}</p>}
      {children && <div>{children}</div>}
    </div>
  );
}

export default PageSectionHeader