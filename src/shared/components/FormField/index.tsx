import { cn } from '@/utils/utilHelper';
import React from 'react';

interface Props {
  htmlFor?: string;
  label?: string;
  error?: string;
  className?: string;
  hideLabel?: boolean;
  children: React.ReactNode;
}

const FormField = ({
  htmlFor,
  label,
  error,
  className,
  hideLabel = false,
  children,
}: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn('group mb-2 block text-sm text-neutral-800', className)}
    >
      <div
        className={cn(
          'mb-1 text-neutral-800 group-focus-within:text-blue-500 group-focus:text-blue-500',
          className,
          hideLabel ? 'sr-only' : ''
        )}
      >
        {!hideLabel && label}
      </div>
      {children}
      {error && <div className='mt-2 text-xs text-error'>{error}</div>}
    </label>
  );
};

export default FormField;
