import React, { InputHTMLAttributes, useState } from 'react';
import TextInput from '@/shared/components/TextInput';
import Image from 'next/image';

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
  <Image
    className='w-full'
    src='/images/showPassword-icon.svg'
    alt='Password icon'
    width={24}
    height={24}
    priority
  />
);

const HidePasswordIcon: React.FC = () => (
  <Image
    className='w-full'
    src='/images/hidePassword-icon.svg'
    alt='Password icon'
    width={24}
    height={24}
    priority
  />
);

export default PasswordInput;
