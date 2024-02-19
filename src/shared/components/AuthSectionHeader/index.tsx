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
      {title && <h1 className="text-lg md:text-3xl font-semibold mb-2">{title}</h1>}
      {subtitle && <p className="text-base text-gray-600 mb-6">{subtitle}</p>}
      {children && <div>{children}</div>}
    </div>
  );
};

export default AuthSectionHeader;
