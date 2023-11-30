/* eslint-disable react/no-unescaped-entities */
'use client';

import { handleMouseEnter } from '@/libs/text-effect';
import Image from 'next/image';

const ContactHero = () => {
  return (
    <section className="relative h-[267px] sm:h-[523px] w-full">
      <div className="w-full h-full max-h-[720px] max-sm:h-[267px] sm:block absolute top-0 left-0">
        <Image
          src="/contact.jpeg"
          alt="hero image"
          width={1440}
          height={523}
          priority
          className="w-full h-full sm:object-cover"
        />
      </div>

      <div className="flex top-0 relative z-10 text-white h-full items-center w-full bg-black/70 xl:bg-black/80 justify-center px-2 sm:px-4 lg:px-8 transition-colors duration-500">
        <div className="flex flex-col gap-y-5 w-full sm:max-w-[90%]   xl:max-w-[85%] 2xl:max-w-[90%]  items-center">
          <h2
            onMouseEnter={handleMouseEnter}
            className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold sm:font-bold scale-y-110 mb-4 lg:mb-8"
            data-value="Contact Us"
          >
            Contact Us
          </h2>
          <p className="w-full sm:max-w-[80%] text-center sm:font-medium text-white/80 text-sm sm:text-lg">
            At CodeGranites, we're passionate about crafting innovative digital solutions that exceed expectations.
            Whether you're seeking custom software, web development, or mobile applications that can take your business
            to new heights, we're here to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
