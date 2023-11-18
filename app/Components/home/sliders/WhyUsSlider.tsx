'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel-react';
import { PrevButton, NextButton, usePrevNextButtons } from './SliderBtn';
import slideByIdx, { INNOVATION_SLIDES } from './slide';
import LoadingSpinner from '../../loaders/LoadingSpinner';
import Autoplay from 'embla-carousel-autoplay';
import './slider.scss';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const WhyUsSlider = () => {
  const options: EmblaOptionsType = { loop: true, duration: 10 };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const { autoplay } = emblaApi.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(
    emblaApi,
    onButtonClick,
  );

  return (
    <div className="w-full max-w-[1000px] xl:max-w-[1200px] flex flex-col justify-center items-center h-[350px] relative p-8 embla md:ml-10 overflow-hidden ">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="embla__container flex touch-pan-y w-full ">
          {INNOVATION_SLIDES.map((slide) => (
            <div
              className="embla__slide  min-w-0 flex-shrink-0 flex-grow-0 basis-[100%] pl-4 lg:px-8 max-xl:w-full max-md:justify-center flex flex-col max-md:items-center gap-4 lg:gap-6 "
              key={slide.id}
            >
              <h3 className="text-lg sm:text-2xl lg:text-3xl font-medium sm:font-semibold text-header">
                {slide.title}
              </h3>
              <p className="max-md:w-full max-md:text-center text-header">{slide.description}</p>
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
{
  /* <LoadingSpinner />
<p className="animate-pulse text-3xl">Refactoring</p> */
}

export default WhyUsSlider;
