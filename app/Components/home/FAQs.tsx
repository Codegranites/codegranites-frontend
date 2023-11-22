'use client';

import { FAQS } from '@/libs/constants';
import cn from '@/utils/tailwind';
import Image from 'next/image';
import React, { useState } from 'react';
import { BsChevronBarRight, BsChevronRight, BsChevronUp } from 'react-icons/bs';

export const FAQs = () => {
  const [showFaq, setShowFaq] = useState(new Array(FAQS.length).fill(false));
  const [openIndex, setopenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setopenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="flex flex-col justify-center w-full items-center py-20 relative z-10 ">
      <div className="flex mb-20 w-full justify-center">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-header">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="flex max-lg:flex-col-reverse justify-center gap-8 lg:gap-16 xl:gap-28 w-full items-center">
        <div className="flex justify-center items-center  w-full max-lg:px-4">
          <div className="flex lg:flex-col justify-center items-start max-lg:w-full max-lg:items-center h-full">
            <div className="flex flex-col gap-y-6 max-lg:w-full lg:ml-2 xl:ml-4">
              {FAQS.map((faq, index) => (
                <div
                  key={faq.id}
                  className={cn(
                    'relative text-[15px] items-start flex w-full justify-between  gap-4 xl:gap-8 border border-[#cdcdcd] gap-x-10 min-h-[90px] px-2 pt-4',
                    openIndex === index ? 'pb-4 ' : '',
                  )}
                >
                  <div className="flex flex-col gap-y-5 items-start ">
                    <h3
                      onClick={() => toggleFaq(index)}
                      className="text-lg tracking-tight font-medium text-gray-800 bg-white"
                    >
                      {faq.question}
                    </h3>

                    <p
                      className={cn(
                        'ml-2 lg:max-w-[960px] transition-all text-base duration-700',
                        openIndex === index ? 'h-full opacity-100' : 'h-0 opacity-0 absolute -z-10',
                      )}
                    >
                      {' '}
                      {faq.answer}
                    </p>
                  </div>

                  <button
                    type="button"
                    tabIndex={0}
                    onClick={() => toggleFaq(index)}
                    className={cn(
                      'text-[#cdcdcd] text-[28px] font-medium select-none outline-none cursor-pointer h-12 max-w-[50px] focus:border border-[#cdcdcd] w-full flex items-center justify-center transition-all duration-500 relative z-20',
                      openIndex === index ? '[&>svg]:-rotate-90 ' : '',
                    )}
                  >
                    <BsChevronRight />
                  </button>
                </div>
              ))}
            </div>
            <div className="hidden lg:flex w-full justify-center mt-10">
              <p className="text-lg">
                Have more questions? Contact our <span className="text-[#eea300]">Support</span> Team
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center lg:flex-col items-center ">
          <div className=" relative font-tommy  font-bold text-primary-light max-w-[300px] w-full  h-[120px] max-[500px]:max-w-[250px] max-[400px]:max-w-[200px] lg:-left-[5rem]  max-lg:bottom-10">
            <div className="flex absolute justify-center w-full h-[100px] bottom-0 perspective">
              <span className="font-tommy absolute left-0 text-5xl -bottom-6 scale-y-125">?</span>
              <span className="font-tommy absolute -top-12 text-[128px] scale-y-125 text-primary animate-rotate3d">
                ?
              </span>
              <span className="font-tommy absolute right-0  text-5xl -bottom-8 scale-y-125">?</span>
            </div>
          </div>
          <div className="hidden lg:flex w-full  p-6 relative items-center justify-center">
            <Image src={'/illustrations/faq-image.png'} alt="judging" width={800} height={800} />
          </div>
        </div>
      </div>
      <div className="lg:hidden flex w-full justify-center mt-4">
        <p className="text-lg">
          Have more questions? Contact our <span className="text-[#eea300]">Support</span> Team
        </p>
      </div>
    </section>
  );
};
