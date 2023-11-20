'use client';
import React from 'react';
import useInView from '@/hooks/useInView';
import cn from '@/utils/tailwind';
import Image from 'next/image';
import contactOne from '../../../public/contactOne.jpeg';

const ContactHero = () => {
  const worksRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const isInView2 = useInView(titleRef);
  return (
    <section className="relative h-[63vh] w-full">
      <div
        className={cn(
          'absolute',
          isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
        )}
      >
        <Image className="lg:w-screen h-[66vh] object-cover" src={contactOne} alt="Background Image"></Image>
      </div>

      <div
        ref={titleRef}
        className={cn(
          'absolute z-10 top-0 left-0 duration-300 bg-black/40 w-full h-[66vh] text-white flex flex-col justify-center p-4 text-center',
          isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
        )}
      >
        <h2
          ref={worksRef}
          className={cn(
            'text-[#ffffff] font-bold text-2xl md:text-3xl lg:text-5xl text-center leading-[5.625em]',
            isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
          )}
        >
          Contact Us
        </h2>
        <p
          ref={worksRef}
          className={cn(
            'text-[#ffffff] text-xl lg:text-[1.5rem] lg:pt-[1.2em] leading-7 lg:leading-10 w-[100%] lg:w-[80%] text-center mx-auto',
            isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
          )}
        >
          At CodeGranites, we&apos;re passionate about crafting innovative digital solutions that exceed expectations.
          Whether you&apos;re seeking custom software, web development, or mobile applications that can take your
          business to new heights, we&apos;re here to help.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
