'use client';

import Image from 'next/image';
import React from 'react';
import abt from '../../../public/abtsec1.svg';
import abt2 from '../../../public/abtsec2.svg';
import useInView from '@/hooks/useInView';
import cn from '@/utils/tailwind';

const AboutUs = () => {
  const worksRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const isInView = useInView(worksRef);
  const isInView2 = useInView(titleRef);

  return (
    <section className="my-8 lg:my-20 h-[830px] w-full flex flex-col items-center">
      <h2
        ref={titleRef}
        className={cn(
          'font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-header',
          isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
        )}
      >
        About Us
      </h2>

      <div>
        <div className="flex">
          <div>
            <h2>Our Product Summary</h2>
            <p>
              At Code Granites, we design and develop innovative digital solutions that go beyond expectations. From
              custom software to web and mobile applications, we craft products that elevate businesses to new heights.
            </p>
          </div>
          <div>
            <div className="relative ">
              <Image src={abt} width={480} height={376} alt="illustration " />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <Image
                  src={abt2}
                  width={480}
                  height={376}
                  alt="illustration"
                  className="transform -translate-x-1/2 translate-y-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
