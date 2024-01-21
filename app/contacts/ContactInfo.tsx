import Image from 'next/image';
import React from 'react';
import cn from '@/utils/tailwind';
import useInView from '@/hooks/useInView';
import Link from 'next/link';

const ContactInfo = () => {
  const inquireRef = React.useRef<HTMLHeadingElement>(null);
  const isInView2 = useInView(inquireRef);

  return (
    <section
      ref={inquireRef}
      className={cn(
        'bg-[#132535] w-full h-full  lg:max-w-1/2 lg:rounded-xl relative px-8 sm:px-4 sm:pl-8 my-5 py-12 lg:my-0 flex flex-col gap-y-8 lg:gap-y-20  flex-1 items-start overflow-hidden lg:pb-[10.2rem]',
        isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
      )}
    >
      <div className=" w-full max-w-[285px] flex flex-col gap-y-3">
        <h4 className="text-[#EAEAEA] tracking-wide text-[1rem]  font-medium">General Inquiries</h4>

        <p className="text-[#EAEAEA] tracking-wide text-sm w-full  leading-[25px] font-normal">
          Interested in learning more about our digital solutions and how they can transform your business? Reach out to
          us.
        </p>

        <a href="mailto:info@codegranites.com" className=" text-[#4B97ED]">
          info@codegranites.com
        </a>
      </div>

      <div className="w-full max-w-[285px] flex flex-col gap-y-3">
        <h4 className="text-[#EAEAEA] text-[1rem]  font-semibold">Technical Support</h4>

        <p className="text-[#EAEAEA] text-[.9rem] w-[92%] leading-[36px]">
          Encountering technical challenges or need support with implementation? Reach our technical support team.
        </p>

        <a href="mailto:support@codegranites.com" className="py-4 text-[#4B97ED]">
          support@codegranites.com
        </a>
      </div>

      <div className="flex flex-col w-full max-w-[285px]">
        <h4 className="text-[#EAEAEA] text-[1rem] py-2 font-semibold">Email Us</h4>

        <ul className={'list-none'}>
          <li className="text-[#EAEAEA] font-normal text-[.9rem] w-[92%] leading-[36px]">Info@codesgranite.com</li>

          <li className="text-[#EAEAEA] font-normal text-[.9rem] w-[92%] leading-[36px]">Info@codesgranite.com</li>

          <li className="text-[#EAEAEA] font-normal text-[.9rem] w-[92%] leading-[36px]">Info@codesgranite.com</li>
        </ul>
      </div>

      <div className="flex items-center gap-x-5 lg:mt-20">
        <Link href="https://linkedin.com/company/codegranites" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/linked-in.png" width="36" height="36" alt="Linkedin Icon" />
        </Link>

        <Link href="https://twitter.com/CodeGranites" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/x.png" width="36" height="36" alt="X Icon" />
        </Link>
      </div>

      <Image
        className="hidden lg:block  absolute bottom-20 right-24 opacity-70 z-10"
        src="/ellipse-circle.svg"
        alt="Circle"
        width={152}
        height={152}
      />
      <Image
        className="hidden lg:block  absolute -bottom-3 -right-20  "
        src="/ellipse-cone.svg"
        alt="Cone"
        width={304}
        height={304}
      />
    </section>
  );
};

export default ContactInfo;
