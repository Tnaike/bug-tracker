'use client';

import React from 'react';
import './Button.css';
import Link from 'next/link';

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
    | 'transparent';
  size?: 'default' | 'small' | 'medium' | 'large';
  height?: string;
  disabled?: boolean;
  isLoading?: boolean;
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
  svgIcon,
  onClick = () => {},
  href,
  className,
}) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`button btn-${variant} btn-${size} h-${height} ${className}`}
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
      className={`button btn-${variant} btn-${size} h-${height} ${className}`}
    >
      {svgIcon && <span>{svgIcon}</span>}
      {label}
      {isLoading && disabled}
    </button>
  );
};

export default Button;
