import { cn } from '@/utils/utilHelper';
import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?:
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'hidden'
    | 'month'
    | 'number'
    | 'password'
    | 'range'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | 'file';
  label?: string;
  icon?: React.ReactNode;
  error?: string;
}

const TextInput = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(
  (
    {
      className,
      id,
      type,
      placeholder,
      required,
      value,
      defaultValue,
      disabled,
      onChange,
      onFocus,
      onBlur,
      name,
      label,
      icon,
      error,
    },
    ref
  ) => {
    return (
      <div className='relative'>
        {label && <label htmlFor={id}>{label}</label>}
        {icon && (
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center'>
            {icon}
          </div>
        )}
        <input
          className={cn(
            'block w-full rounded-[6px] bg-slate-50 border border-stroke-200 p-3 text-base font-normal text-text focus:border-blue-200 focus:outline-none focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-disabled disabled:text-input placeholder:text-slate-400',
            { 'border-error': error },
            className
          )}
          ref={ref as React.ForwardedRef<HTMLInputElement>}
          name={name}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          type={type}
          id={id}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          defaultValue={defaultValue}
        />
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
