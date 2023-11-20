import Image from 'next/image';
import React from 'react';
import serv from '../../../public/services.svg';
import servm from '../../../public/services-mobile.svg';

const Hero = () => {
  return (
    <section className="relative h-[500px] sm:h-[720px] w-full">
      <div className="w-full h-full max-h-[720px] hidden sm:block absolute top-0 left-0">
        <Image src={serv} alt="hero image" width={1440} height={720} priority className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-full max-h-[650px] sm:hidden absolute top-0 left-0">
        <Image src={servm} alt="hero image" width={380} height={500} priority className="w-full h-full object-cover" />
      </div>
      <div className="flex top-0 relative z-10 text-white h-full items-center w-full bg-black/40 justify-center px-2 sm:px-4 lg:px-8">
        <div className="flex flex-col gap-y-5 w-full sm:max-w-[90%]   xl:max-w-[80%]  items-center">
          <p className="max-[400px]:text-base max-[500px]:text-lg text-xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold sm:font-bold scale-y-110 mb-4 lg:mb-8">
            Services
          </p>
          <p className="w-[50%] sm:max-w-[80%] text-center sm:font-medium text-white/80 text-sm sm:text-lg">
            Explore our services and let Code Granites be your partner in navigating the dynamic realm of digital
            innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
