'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import abt from '../../../public/about-mobile.svg';
import abt2 from '../../../public/about.svg';

const TypewriterComponent = dynamic(() => import('typewriter-effect'), {
  ssr: false,
});

const Hero = () => {
  return (
    <section className="relative h-[500px] sm:h-[720px] w-full">
      <div className="w-full h-full max-h-[720px] hidden sm:block absolute top-0 left-0">
        <Image src={abt2} alt="hero image" width={1440} height={435} priority className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-full max-h-[650px] sm:hidden absolute top-0 left-0">
        <Image src={abt} alt="hero image" width={380} height={500} priority className="w-full h-full object-cover" />
      </div>
      <div className="flex top-0 relative z-10 text-white h-full items-center w-full  justify-center px-2 sm:px-4 lg:px-8">
        <div className="flex flex-col gap-y-5 w-full sm:max-w-[90%]   xl:max-w-[80%]  items-center">
          <p className="max-[400px]:text-base max-[500px]:text-lg text-xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold sm:font-bold scale-y-110 mb-4 lg:mb-8">
            <TypewriterComponent
              component="p"
              options={{
                autoStart: true,
                delay: 100,
                loop: true,
                strings: [
                  'Where Innovation Meets Expertise!',
                  'Fusing Innovation with Proven Expertise',
                  'Where Expertise and Innovation Converge!',
                  'Transforming the Future with CodeGranites',
                  'The Nexus of Innovation and Unmatched Expertise',
                ],
                deleteSpeed: 50,
              }}
            />
          </p>
          <p className="lg:w-[50%] sm:w-full text-center font-lg sm:font-medium text-white/80 text-sm sm:text-lg">
            Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
