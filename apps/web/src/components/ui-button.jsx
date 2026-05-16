import { cva } from 'class-variance-authority';
import { cn } from '../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-brand-blue text-white hover:bg-blue-500 shadow-glow',
        secondary: 'bg-brand-green text-slate-900 hover:bg-green-400',
        ghost: 'glass text-slate-100 hover:bg-white/10'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export function UIButton({ className, variant, ...props }) {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
}
