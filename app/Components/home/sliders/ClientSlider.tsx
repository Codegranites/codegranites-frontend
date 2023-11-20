'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel-react';
import { PrevButton, NextButton, usePrevNextButtons, DotButton } from './SliderBtn';
import slideByIdx, { CLIENT_SLIDES, INNOVATION_SLIDES } from './slide';
import LoadingSpinner from '../../loaders/LoadingSpinner';
import Autoplay from 'embla-carousel-autoplay';
import './slider.scss';
import cn from '@/utils/tailwind';
import TestimonialCard from '../card/TestimonialCard';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const ClientSlider = () => {
  const options: EmblaOptionsType = { loop: true, duration: 10 };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="w-full flex flex-col justify-center items-center md:h-[400px] xl:h-[500px] relative p-8 embla overflow-hidden  border border-gray-300 py-4 lg:py-8  xl:py-12 pb-8">
      <div className="overflow-hidden w-full " ref={emblaRef}>
        <div className="embla__container flex touch-pan-y w-full ">
          {CLIENT_SLIDES.map((slide) => (
            <TestimonialCard currIdx={selectedIndex} key={slide.id} {...slide} />
          ))}
        </div>
      </div>

      <div className="embla__dots w-full justify-center items-center  flex mt-4 lg:mt-12 gap-x-4 absolute bottom-3 z-[1] left-0 right-0">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={cn('h-[16px] w-[16px] embla__dot items-center', {
              'embla__dot--selected flex': index === selectedIndex,
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientSlider;
