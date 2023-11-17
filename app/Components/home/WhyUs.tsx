import Image from 'next/image';
import React from 'react';
import WhyUsSlider from './sliders/WhyUsSlider';
import { EmblaOptionsType } from 'embla-carousel-react';

const WhyUs = () => {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section className="my-8 lg:my-20 w-full flex flex-col items-center">
      <div className="flex flex-col gap-y-5 items-center w-full max-w-[1000px]">
        <h2 className="font-bold text-xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Why Choose CodeGranites?</h2>
        <p className="w-full text-center text-base sm:text-lg text-[#282828]">
          At Codegranites, our commitment to excellence and innovation sets us apart as your ideal technology partner.
          Discover the compelling reasons to choose us for your next project
        </p>
      </div>

      <div className="flex w-full justify-between mt-8 bg-[#FBF9FA] px-2 sm:px-4 lg:px-8 rounded-lg py-2 lg:py-4">
        <div className="w-full max-w-[30%]">
          <Image src="/illustrations/illustration-1.png" width={500} height={500} alt="illustration" />
        </div>
        <div className="w-full max-w-[70%] h-full flex items-center ">
          <WhyUsSlider slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
