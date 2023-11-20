import Image from 'next/image';
import React from 'react';
import { ClientSliderProps } from '../sliders/slide';
import cn from '@/utils/tailwind';

const TestimonialCard = ({ name, description, currIdx = 0, id }: ClientSliderProps) => {
  return (
    <div
      className={cn(
        ' min-w-0 w-full md:max-w-[95%]  items-center flex-shrink-0 flex-grow-0 basis-[100%]  flex flex-col md:flex-row h-full md:h-[400px]  pl-6 md:px-8 py-4 md:py-8 ',
        currIdx + 1 === id ? 'opacity-100' : 'opacity-0',
      )}
    >
      <div className="flex max-md:justify-center items-center w-full max-w-[200px] md:max-w-[300px] relative md:max-h-[250px] md:h-full">
        <Image src="/client/client-1.png" height={250} width={250} alt="client" className="relative z-10 " />
        <div className="absolute -left-4 -top-2  md:-top-5 md:-left-5 w-[200px] h-[200px] md:w-[270px] md:h-[270px] bg-[#F3DE8A] rounded-full" />
      </div>
      <div className="flex flex-col md:w-[70%] gap-y-5 lg:gap-y-10 items-start -mt-5 lg:-mt-10">
        <div className="flex max-md:w-full max-md:justify-center max-md:my-4 max-md:mt-8">
          <Image src="/icons/quote.svg" height={64} width={64} alt="quote" />
        </div>
        <p className="text-header text-sm md:text-base">{description}</p>
        <p className="text-black font-medium text-sm md:text-base">— [{name}]</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
