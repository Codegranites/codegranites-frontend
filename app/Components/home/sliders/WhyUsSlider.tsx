'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel-react';
import { PrevButton, NextButton, usePrevNextButtons } from './SliderBtn';
import slideByIdx, { INNOVATION_SLIDES } from './slide';
import LoadingSpinner from '../../loaders/LoadingSpinner';
import Autoplay from 'embla-carousel-autoplay';
import './slider.scss';
import Image from 'next/image';
import cn from '@/utils/tailwind';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const WhyUsSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const options: EmblaOptionsType = { loop: true, duration: 10 };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const { autoplay } = emblaApi.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);

    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(
    emblaApi,
    onButtonClick,
  );

  return (
    <div className="w-full max-w-[1000px] xl:max-w-[1200px] flex flex-col justify-center items-center md:h-[350px] lg:h-[440px] relative embla  overflow-hidden ">
      <div className="overflow-hidden flex items-center w-full py-7  h-full" ref={emblaRef}>
        <div className="embla__container flex touch-pan-y w-full ">
          {INNOVATION_SLIDES.map((slide) => (
            <div
              className={cn(
                'embla__slide  min-w-0 flex-shrink-0 flex-grow-0 basis-[100%] pl-4 lg:px-8 max-xl:w-full max-md:max-w-[358px] max-md:w-full max-md:justify-center flex flex-col md:flex-row max-md:items-center gap-4 lg:gap-6 ',
                selectedIndex + 1 === slide.id ? 'opacity-100' : 'opacity-0',
              )}
              key={slide.id}
            >
              <div className="md:w-full max-[500px]:max-w-[300px] max-w-[400px] min-[900px]:max-w-[30%]">
                <Image
                  src={`/illustrations/illustration-${slide.id}.png`}
                  width={500}
                  height={500}
                  alt="illustration"
                />
              </div>
              <div className="flex flex-col gap-4 lg:gap-6 mt-10 max-md:items-center md:w-full md:max-w-[70%]">
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-medium sm:font-semibold text-header">
                  {slide.title}
                </h3>
                <p className="max-md:w-full max-md:text-center text-header">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full justify-center  flex mt-4 lg:mt-8 gap-x-4">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
};

export default WhyUsSlider;
