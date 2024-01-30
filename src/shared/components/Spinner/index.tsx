import { VariantProps, cva } from 'class-variance-authority';
import Image from 'next/image';

export const spinnerVariants = cva('relative animate-spin', {
  variants: {
    size: {
      xs: 'w-4 h-4',
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-20 h-20',
      xl: 'w-36 h-36',
    },
    position: {
      center: 'mx-auto',
      default: '',
    },
  },
  defaultVariants: {
    size: 'md',
    position: 'default',
  },
});

function Spinner({ size, position }: VariantProps<typeof spinnerVariants>) {
  return (
    <div className={spinnerVariants({ size, position })}>
      <Image
        width={156}
        height={156}
        alt='Loading spinner'
        src='/images/spinner.svg'
        className='object-fit'
        priority
      />
    </div>
  );
}

export default Spinner;
