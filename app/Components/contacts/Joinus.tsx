'use client';
import React from 'react';
import useInView from '@/hooks/useInView';
import cn from '@/utils/tailwind';
import Button from '../UI/Button';
import Image from 'next/image';
import contactTwo from '../../../public/contactTwo.png';

const Joinus = () => {
  const text = 'Get started';
  const worksRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const isInView2 = useInView(titleRef);
  return (
    <section className="relative h-[66vh]">
      <div
        className={cn(
          'absolute',
          isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
        )}
      >
        <Image className="lg:w-screen h-[66vh] object-cover" src={contactTwo} alt="Background Image"></Image>
      </div>

      <div
        ref={titleRef}
        className={cn(
          'absolute z-10 top-0 left-0 duration-300 bg-black/60 w-full h-full text-white flex flex-col justify-center p-4 text-center',
          isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
        )}
      >
        <h2 className="text-[#ffffff] font-bold text-2xl md:text-3xl lg:text-5xl leading-10">
          Code Granites – Elevating Ideas, Empowering Innovation.
        </h2>
        <p
          ref={worksRef}
          className={cn(
            'text-[#ffffff] text-[1.2rem] py-[1.2em] font-normal',
            isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
          )}
        >
          Join us on the journey of digital transformation
        </p>

        <div
          ref={worksRef}
          className={cn(
            'mx-auto my-3',
            isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
          )}
        >
          <Button
            styles={
              ' w-[190px] h-[56px] py-2 rounded-lg item-center justify-center bg-[#FFFFFF] text-[.825rem] leading-10 text-[#052C42] border border-transparent flex gap-2 text-white-100 text-base mt-3'
            }
            title={''}
          >
            {text}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Joinus;
