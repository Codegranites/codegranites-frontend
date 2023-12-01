import React, { FormEvent, useState } from 'react';
import cn from '@/utils/tailwind';
import useInView from '@/hooks/useInView';

const ContactForm = () => {
  const initailForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    subject: '',
    message: '',
  };

  const [formData, setFormData] = useState(initailForm);

  const isDisabled =
    formData.firstName === '' ||
    formData.lastName === '' ||
    formData.email === '' ||
    formData.phone.length < 11 ||
    formData.message === '';
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const isInView2 = useInView(titleRef);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="h-full w-full lg:w-1/2 px-8" onSubmit={handleSubmit}>
      <div
        ref={titleRef}
        className={cn(
          'flex flex-col justify-between gap-y-8',
          isInView2 ? 'opacity-100 translate-y-0 duration-1000' : 'opacity-0 translate-y-36',
        )}
      >
        {/* {First Name } */}
        <div className="flex flex-col gap-y-2">
          <label htmlFor="firstName" className="text-lg flex gap-x-1">
            <span className="font-medium">First Name</span>
            <span className="text-primary-light font-bold">*</span>
          </label>
          <input
            className=" rounded-lg border border-[#E1E1E1] w-full py-4 px-4 bg-white text-gray-700 focus-visible:border-primary-light outline-none transition-all duration-300"
            type="text"
            placeholder="e.g, John"
            name="firstName"
            id="firstName"
            required
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          />
        </div>

        {/* {Last Name } */}

        <div className="flex flex-col gap-y-2">
          <label htmlFor="lastName" className="text-lg flex gap-x-1">
            <span className="font-medium">Last Name</span>
            <span className="text-primary-light font-bold">*</span>
          </label>
          <input
            className=" rounded-lg border border-[#E1E1E1] w-full py-4 px-4 bg-white text-gray-700 focus-visible:border-primary-light outline-none transition-all duration-300"
            type="text"
            placeholder="e.g, Smith"
            name="lastName"
            id="lastName"
            required
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          />
        </div>

        {/* {Email } */}
        <div className="flex flex-col gap-y-2">
          <label htmlFor="email" className="text-lg flex gap-x-1">
            <span className="font-medium">Email</span>
            <span className="text-primary-light font-bold">*</span>
          </label>
          <input
            className=" rounded-lg border border-[#E1E1E1] w-full py-4 px-4 bg-white text-gray-700 focus-visible:border-primary-light outline-none transition-all duration-300"
            type="email"
            required
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            placeholder="name@company.com"
            name="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          />
        </div>

        {/* {Phone Number } */}
        <div className="flex flex-col gap-y-2">
          <label htmlFor="phone" className="text-lg flex gap-x-1">
            <span className="font-medium">Phone Number</span>
            <span className="text-primary-light font-bold">*</span>
          </label>
          <input
            className=" rounded-lg border border-[#E1E1E1] w-full py-4 px-4 bg-white text-gray-700 focus-visible:border-primary-light outline-none transition-all duration-300"
            type="number"
            required
            min={11}
            placeholder="+234-00-123-2323"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          />
        </div>

        {/* {Company Name } */}

        <div className="flex flex-col gap-y-2">
          <label htmlFor="companyName" className="text-lg ">
            <span className="font-medium">Company Name</span>
          </label>
          <input
            className=" rounded-lg border border-[#E1E1E1] w-full py-4 px-4 bg-white text-gray-700 focus-visible:border-primary-light outline-none transition-all duration-300"
            type="text"
            placeholder="e.g, xyz company"
            name="companyName"
            id="companyName"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          />
        </div>

        {/* {Subject } */}

        <div className="flex flex-col gap-y-2">
          <label htmlFor="subject" className="text-lg ">
            <span className="font-medium">Subject</span>
          </label>
          <input
            className="outline-none rounded-lg  border-[#E1E1E1] w-full py-4 px-4 bg-white text-gray-700 border focus-visible:border-primary-light  transition-all duration-300"
            type="text"
            placeholder="subject...."
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-y-2 ">
          <label htmlFor="message" className="text-lg flex gap-x-1">
            <span className="font-medium">Message</span>
            <span className="text-primary-light font-bold">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            placeholder="How can we help you today?"
            className=" border focus-visible:border-primary-light  transition-all duration-300 placeholder:text-[#242424] flex-1 appearance-none w-full py-2 px-4 bg-white text-gray-700 rounded-lg text-base outline-none  border-[#E1E1E1] min-h-[193px] resize-none"
          />
        </div>

        <div className="p-2 mt-3 items-center justify-center w-full flex">
          <button
            disabled={isDisabled}
            type="submit"
            aria-label="send message"
            tabIndex={0}
            className="w-full max-w-[300px] bg-primary border-none duration-300 hover:bg-primary-light py-4 rounded-lg item-center justify-center text-[#FFFFFF] flex gap-2 text-white-100 text-base  text-right disabled:opacity-80 focus-visible:outline-2 focus-visible:outline-primary outline-offset-[5px]"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
