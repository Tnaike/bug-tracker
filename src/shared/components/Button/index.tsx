'use client';

import React from 'react';
import './Button.css';
import Link from 'next/link';
import Spinner from '@/shared/components/Spinner';
import { cn } from '@/utils/utilHelper';

interface ButtonProps {
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'transparent'
    | 'basic';
  size?: 'default' | 'small' | 'medium' | 'large' | 'text';
  height?: string;
  disabled?: boolean;
  isLoading?: boolean;
  loadingIcon?: React.ReactElement;
  svgIcon?: React.ReactElement;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = 'button',
  variant = 'primary',
  size = 'default',
  height = 'fit',
  disabled = false,
  isLoading = false,
  loadingIcon = <Spinner />,
  svgIcon,
  onClick = () => {},
  href,
  className,
}) => {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          `button btn-${variant} btn-${size} h-${height}`,
          className
        )}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={cn(`button btn-${variant} btn-${size} h-${height}`, className)}
    >
      {isLoading ? <span>{loadingIcon}</span> : <span>{svgIcon}</span>}
      {label}
    </button>
  );
};

export default Button;
