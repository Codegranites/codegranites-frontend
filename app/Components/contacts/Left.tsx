import Image from 'next/image';
import React from 'react';
import x from '../../../public/icons/x.png';
import linkedin from '../../../public/icons/Social Icon.png';
import ig from '../../../public/icons/ig.png';
import fb from '../../../public/icons/fb.png';
import cone from '../../../public/Ellipse 9.png';
import circle from '../../../public/Ellipse 10.png';
import cn from '@/utils/tailwind';
import useInView from '@/hooks/useInView';

const Left = () => {
  const worksRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const isInView2 = useInView(titleRef);

  return (
    <div
      ref={titleRef}
      className={cn(
        'bg-[#132535] w-full h-[100vh] lg:h-[140vh] lg:w-[50vw] rounded-xl relative px-[1.2em] my-5 lg:my-0',
        isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
      )}
    >
      <div className="py-6 px-4">
        <h4
          ref={titleRef}
          className={cn(
            'text-[#EAEAEA] text-[1rem] py-2 font-semibold',
            isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
          )}
        >
          General Inquiries
        </h4>

        <p
          ref={worksRef}
          className={cn(
            'text-[#EAEAEA] text-[.9rem] w-[92%] leading-[36px]',
            isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
          )}
        >
          Interested in learning more about our digital solutions and how they can transform your business? Reach out to
          us.
        </p>

        <p
          ref={titleRef}
          className={cn(
            'py-4 text-[#4B97ED]',
            isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
          )}
        >
          info@codegranites.com
        </p>
      </div>

      <div className="py-6 px-4">
        <h4
          ref={titleRef}
          className={cn(
            'text-[#EAEAEA] text-[1rem] py-2 font-semibold',
            isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
          )}
        >
          Technical Support
        </h4>

        <p
          ref={worksRef}
          className={cn(
            'text-[#EAEAEA] text-[.9rem] w-[92%] leading-[36px]',
            isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
          )}
        >
          Encountering technical challenges or need support with implementation? Reach our technical support team.
        </p>

        <p
          ref={worksRef}
          className={cn(
            'py-4 text-[#4B97ED]',
            isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
          )}
        >
          support@codegranites.com
        </p>
      </div>

      <div
        ref={worksRef}
        className={cn(
          'py-6 px-4',
          isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
        )}
      >
        <h4
          className={cn(
            'text-[#EAEAEA] text-[1rem] py-2 font-semibold',
            isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
          )}
        >
          Reach out to us!
        </h4>

        <ul
          className={cn(
            'list-none',
            isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
          )}
        >
          <li className="text-[#EAEAEA] font-normal text-[.9rem] w-[92%] leading-[36px]">+234 701234567889</li>

          <li className="text-[#EAEAEA] font-normal text-[.9rem] w-[92%] leading-[36px]">+234 701234567889</li>

          <li className="text-[#EAEAEA] font-normal text-[.9rem] w-[92%] leading-[36px]">+234 701234567889</li>
        </ul>
      </div>

      <div className="flex justify-between items-center gap-3 pl-3 absolute lg:bottom-[25%] left-[5%]">
        <Image className="z-50" src={ig} width="25" height="25" alt="Instagram Icon" />
        <Image className="z-50" src={fb} width="25" height="25" alt="Facebook Icon" />
        <Image className="z-50 " src={x} width="25" height="25" alt="X Icon" />
        <Image className="z-50" src={linkedin} width="25" height="25" alt="Linkedin Icon" />
      </div>

      <Image
        className="hidden lg:flex z-50 w-[10em] absolute bottom-[10%] right-[28%] opacity-50"
        src={circle}
        alt="Circle"
      />
      <Image className="hidden lg:flex w-[18em] absolute bottom-0 right-0" src={cone} alt="Cone" />
    </div>
  );
};

export default Left;
