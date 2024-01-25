import React from 'react';
import Image from 'next/image';
import './Button.css';

interface ButtonProps {
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'default' | 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  svgIcon?: React.ReactElement;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = 'button',
  variant = 'primary',
  size = 'default',
  fullWidth = true,
  disabled = false,
  isLoading = false,
  svgIcon,
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`button btn-${variant} btn-${size} ${fullWidth && 'w-full'}`}
    >
      <span>{svgIcon}</span>
      <span>{label}</span>
      {isLoading && (
        <Image
          width={156}
          height={156}
          alt='spinner'
          src='/images/spinner.svg'
          className='object-fit'
        />
      )}
    </button>
  );
};

export default Button;
