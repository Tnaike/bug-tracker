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
  hideLabel,
  children,
}: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'group mb-2 block text-sm text-gray-600 dark:text-white',
        className
      )}
    >
      <div
        className={cn(
          'mb-1 text-gray-600 group-focus-within:text-blue-500 group-focus:text-blue-500',
          hideLabel ? 'sr-only' : ''
        )}
      >
        FormField
      </div>{' '}
      {children}
      {error && <div className='mt-2 text-xs text-error'>{error}</div>}
    </label>
  );
};

export default FormField;
