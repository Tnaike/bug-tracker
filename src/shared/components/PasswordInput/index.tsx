import React, { InputHTMLAttributes, useState } from 'react';
import TextInput from '@/shared/components/TextInput';

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      id = 'password',
      className,
      placeholder,
      required = true,
      value,
      defaultValue,
      onChange,
      onBlur,
      name,
      label,
      icon,
      error,
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const showPasswordToggle = () => {
      setShowPassword((prevState) => !prevState);
    };

    return (
      <div className='relative'>
        <TextInput
          ref={ref}
          type={showPassword ? 'text' : 'password'}
          id={id}
          required={required}
          className={className}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          error={error}
          icon={icon}
          label={label}
        />
        <button
          className='absolute inset-y-0 right-0 flex items-center px-4 text-gray-600'
          type='button'
          onClick={showPasswordToggle}
        >
          {showPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
        </button>
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

const ShowPasswordIcon: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='h-5 w-5'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    />
  </svg>
);

const HidePasswordIcon: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='h-5 w-5'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    />
  </svg>
);

export default PasswordInput;
