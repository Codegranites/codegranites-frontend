'use client';

import useInView from '@/hooks/useInView';
import React from 'react';
import cn from '@/utils/tailwind';

function Hero() {
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const subTitleRef = React.useRef<HTMLParagraphElement>(null);
  const isInView = useInView(subTitleRef);
  const isInView2 = useInView(titleRef);
  return (
    <div className='bg-[url("/privacy.jpg")] text-center flex flex-col justify-center items-center text-white z-10 bg-no-repeat bg-center bg-cover h-72 md:h-96 relative'>
      <div className="absolute top-0 left-0 bg-black/50 h-full w-full -z-10" />
      <h1
        ref={titleRef}
        className={cn(
          'text-2xl sm:text-3xl md:text-5xl font-semibold mb-1',
          isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
        )}
      >
        Privacy Policy
      </h1>
      <p ref={subTitleRef} className={cn(isInView ? 'animate-slideUp' : ' ')}>
        Your Privacy Matters to Us
      </p>
    </div>
  );
}

export default Hero;
