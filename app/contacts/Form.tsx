'use client';
import React from 'react';
import useInView from '@/hooks/useInView';
import cn from '@/utils/tailwind';
import Left from './Left';
import Right from './Right';

const Form = () => {
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const isInView2 = useInView(titleRef);

  return (
    <section className="w-full pt-[100px]">
      <p
        ref={titleRef}
        className={cn(
          'w-[85%] lg:w-[60%] text-center mx-auto text-[1.3rem]',
          isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
        )}
      >
        Have questions or need help? Our dedicated support team is committed to ensuring you receive the assistance you
        need.
      </p>

      <div className="flex flex-col-reverse lg:flex lg:flex-row justify-between items-center lg:p-[10%] mx-auto my-[.5em]">
        <Left />
        <Right />
      </div>
    </section>
  );
};

export default Form;
