import React from 'react';

interface AuthSectionHeaderProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const AuthSectionHeader: React.FC<AuthSectionHeaderProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <div>
      {title && <h1 className='text-4xl font-medium mb-2'>{title}</h1>}
      {subtitle && <p className='text-lg text-gray-600 mb-2'>{subtitle}</p>}
      {children && <div>{children}</div>}
    </div>
  );
};

export default AuthSectionHeader;
