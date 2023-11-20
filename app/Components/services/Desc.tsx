'use client';

import React from 'react';
import useInView from '@/hooks/useInView';
import cn from '@/utils/tailwind';

const Desc = () => {
  const worksRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const isInView = useInView(worksRef);
  const isInView2 = useInView(titleRef);

  return (
    <section className="h-full w-full flex  flex-col items-center mb-8 lg:mb-20 mt-10 gap-y-5 lg:gap-y-8 xl:gap-y-12 2xl:gap-y-20">
      <h2
        ref={titleRef}
        className={cn(
          'font-bold text-2xl sm:text-3xl text-center sm:-[50%] lg:text-4xl xl:text-5xl 2xl:text-6xl text-header',
          isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
        )}
      >
        Elevate Your Digital Presence with Code Granites
      </h2>
      <div
        ref={worksRef}
        className={cn(
          'w-[70%]  mt-8 px-4 place-items-center opacity-0 translate-y-48',

          isInView ? 'animate-slideUp' : ' ',
        )}
      >
        <p>
          Unlock the potential of your business with Code Granite&apos;s comprehensive range of services. We go beyond
          conventional solutions, offering a blend of innovation and functionality tailored to your unique needs.
        </p>
      </div>
    </section>
  );
};

export default Desc;
