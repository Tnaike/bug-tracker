import { cn } from '@/utils/utilHelper';

interface FormErrorMessageProps {
  children?: string;
  className?: string;
}

function FormErrorMessage({ children, className }: FormErrorMessageProps) {
  return <div className={cn('text-xs italic text-error', className)}>{children}</div>;
}

export default FormErrorMessage;
