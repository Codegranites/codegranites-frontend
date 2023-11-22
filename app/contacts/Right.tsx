import React from 'react';
import Input from '../Components/UI/Input';
import Button from '../Components/UI/Button';
import cn from '@/utils/tailwind';
import useInView from '@/hooks/useInView';
import Label from '../Components/UI/Label';

const Right = () => {
  const worksRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const isInView2 = useInView(titleRef);

  const btnText = 'Send Message';
  const fname = 'First Name';
  const lname = 'Last Name';
  const email = 'E-mail Address';
  const phone = 'Phone Number';
  const cname = 'Company Name';
  const subj = 'Subject';
  const msg = 'Message';

  return (
    <form className="w-full lg:w-[50vw] lg:h-[130vh] px-8">
      <div
        ref={titleRef}
        className={cn(
          'flex flex-col justify-between',
          isInView2 ? 'opacity-100 translate-y-0 delay-300 duration-1000' : 'opacity-0 translate-y-36',
        )}
      >
        <div className="py-[1em]">
          <Label id={''} className={'text-[1rem] '}>
            {fname}
          </Label>
          <Input className="placeholder:text-[#000000] rounded-lg border border-[#E1E1E1]" placeholder="e.g, John" />
        </div>

        <div className="py-[1em]">
          <Label id={''} className={'text-[1rem] '}>
            {lname}
          </Label>
          <Input className="placeholder:text-[#000000] rounded-lg border border-[#E1E1E1]" placeholder="e.g, Smith" />
        </div>

        <div className="py-[1em]">
          <Label id={''} className={'text-[1rem] '}>
            {email}
          </Label>
          <Input
            className="placeholder:text-[#000000] rounded-lg border border-[#E1E1E1]"
            placeholder="name@company.com"
          />
        </div>

        <div className="py-[1em]">
          <Label id={''} className={'text-[1rem] '}>
            {phone}
          </Label>
          <Input
            className="placeholder:text-[#000000] rounded-lg border border-[#E1E1E1]"
            placeholder="+234-00-123-2323"
          />
        </div>

        <div className="py-[1em]">
          <Label id={''} className={'text-[1rem] '}>
            {cname}
          </Label>
          <Input className="placeholder:text-[#000000] rounded-lg border border-[#E1E1E1]" placeholder="Apple Inc." />
        </div>

        <div className="py-[1em]">
          <Label id={''} className={'text-[1rem] '}>
            {subj}
          </Label>
          <Input
            className="placeholder:text-[#000000] rounded-lg border border-[#E1E1E1]"
            placeholder="Hello Message"
          />
        </div>

        <div className="py-[1em]">
          <Label id={''} className={'text-[1rem] '}>
            {subj}
          </Label>
          <textarea
            placeholder="How can we help you today?"
            className="placeholder:text-[#242424] flex-1 appearance-none w-full py-2 px-4 bg-white text-gray-700 rounded-lg text-base outline-none border border-[#E1E1E1] h-[24vh]"
          ></textarea>
        </div>

        <div className="p-2 my-auto items-center justify-center">
          <Button
            styles={
              ' w-[300px] bg-[#2E577D] border border-transparent duration-300 hover:bg-[#2E577D] hover:border-transparent py-2 rounded-lg item-center justify-center text-[#FFFFFF] flex gap-2 text-white-100 text-base mt-3 text-right'
            }
            title={''}
          >
            {btnText}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Right;
