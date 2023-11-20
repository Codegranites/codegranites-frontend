import useInView from '@/hooks/useInView';
import { OurValuesProps } from '@/libs/constants';
import cn from '@/utils/tailwind';
import Image from 'next/image';
import React from 'react';

const ValueCard = ({ title, description, icon }: OurValuesProps) => {
  const workRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(workRef);

  return (
    <div
      ref={workRef}
      className={cn(
        'w-full h-full bg-card max-w-[369px] flex flex-col items-center p-2 sm:p-4 py-6 rounded-lg xl:rounded-xl transition-all duration-1000 hover:duration-500 hover:shadow-[0_10px_30px_0_rgba(0,0,0,0.2)]',
        isInView ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
      )}
    >
      <div className="flex h-[80px] w-[80px] bg-white justify-center items-center">
        <Image src={icon} alt="icon" width={48} height={48} />
      </div>
      <div className="flex flex-col items-center [&>p:last-child]:text-center gap-y-4 mt-4 sm:mt-7">
        <p className="text-header font-bold">{title}</p>
        <p className="text-header text-base leading-7">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
