'use client';

import React from 'react';
import WorksCard from './card/WorksCard';
import { HOW_IT_WORKS } from '@/libs/constants';
import useInView from '@/hooks/useInView';
import cn from '@/utils/tailwind';

const HowItWorks = () => {
  const worksRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const isInView = useInView(worksRef);
  const isInView2 = useInView(titleRef);

  return (
    <section className="h-full w-full flex flex-col items-center mb-8 lg:mb-20 mt-8 gap-y-5 lg:gap-y-8 xl:gap-y-12 2xl:gap-y-20">
      <h2
        ref={titleRef}
        className={cn(
          'font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-header',
          isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
        )}
      >
        How It Works
      </h2>
      <div
        ref={worksRef}
        className={cn(
          'w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-y-10 xl:gap-y-12 mt-8 px-4 place-items-center opacity-0 translate-y-48',

          isInView ? 'animate-slideUp' : ' ',
        )}
      >
        {HOW_IT_WORKS.map((work) => (
          <WorksCard key={work.id} {...work} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
