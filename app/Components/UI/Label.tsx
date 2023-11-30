import React, { ReactNode } from 'react';
import { clsx } from 'clsx';
import cn from '@/utils/tailwind';

interface LabelProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const Label: React.FC<LabelProps> = ({ id, className, children }) => {
  return (
    <label className={cn('block mb-2 text-base font-medium text-gray-700', className)} htmlFor={id}>
      {children}
    </label>
  );
};

export default Label;
