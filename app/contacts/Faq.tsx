'use client';
import React from 'react';
import cn from '@/utils/tailwind';
import useInView from '@/hooks/useInView';
import { Accordion, AccordionItem } from '@nextui-org/react';

const Faq = () => {
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const isInView2 = useInView(titleRef);
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <section className="md:h-[60vh] lg:h-screen w-full pt-[100px] ">
      <div
        ref={titleRef}
        className={cn(
          'p-4 flex flex-col text-center',
          isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
        )}
      >
        <p className="text-[1.2rem] leading-10 pb-[1.3em]">
          Have a simple question? Check out our <span className="text-[#4B97ED]">FAQ</span>
        </p>
        <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl text-header text-center leading-[5.625em]">
          Frequently Asked Questions
        </h2>
      </div>

      <div
        className={cn(
          'mx-auto p-4 lg:w-[62vw] shadow-none',
          isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
        )}
      >
        <Accordion className="shadow-none" variant="splitted">
          <AccordionItem
            className="shadow-none text-[1rem] lg:text-[1.1rem] rounded-sm my-1 lg:my-3 border border-[#CDCDCD]"
            key="1"
            aria-label="Accordion 1"
            title="What sets Codegranites apart from other IT service providers?"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            className="shadow-none text-[1rem] lg:text-[1.1rem] rounded-md my-1 lg:my-3 border border-[#CDCDCD]"
            key="2"
            aria-label="Accordion 2"
            title="How do I submit a project proposal to CodeGranites?"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            className="shadow-none text-[1rem] lg:text-[1.1rem] rounded-md my-1 lg:my-3 border border-[#CDCDCD]"
            key="3"
            aria-label="Accordion 3"
            title="What type of projects does CodeGranites specialize in?"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            className="shadow-none text-[1rem] lg:text-[1.1rem] rounded-md my-1 lg:my-3 border border-[#CDCDCD]"
            key="4"
            aria-label="Accordion 4"
            title="Can I get a consultation before starting a project with CodeGranites?"
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
