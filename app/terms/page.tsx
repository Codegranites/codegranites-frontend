import React from 'react';
import TermsAside from '../Components/terms/TermsAside';
import TermsSection from '../Components/terms/TermsSection';

const Terms = () => {
  return (
    <section className="bg-[#e5e5e5] items-center p-[4%] lg:p-[7%]">
      <div className="bg-[#ffffff] rounded-xl lg:max-w-[1240px] lg:p-[2em] mx-auto">
        <h1 className="text-center text-[#2E577D] text-[1.9rem] lg:text-[3rem] font-bold">Terms and Conditions</h1>
        <div className="flex flex-col md:flex-row lg:flex-row sm:px-4 justify-between">
          <TermsAside />
          <TermsSection />
        </div>
      </div>
    </section>
  );
};

export default Terms;
