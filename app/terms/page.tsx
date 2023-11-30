import React from 'react';
import TermsAside from '../Components/terms/TermsAside';
import TermsSection from '../Components/terms/TermsSection';

const Terms = () => {
  return (
    <>
      <section className="bg-[#e5e5e5] items-center p-[4%] lg:p-[7%] min-h-screen relative w-full max-container">
        <div className="bg-[#ffffff] rounded-xl lg:max-w-[1240px] lg:p-[2em] mx-auto relative h-full">
          <h1 className="text-center text-[#2E577D] text-[1.9rem] lg:text-[3rem] font-bold">Terms and Conditions</h1>
          <div className="sm:px-4  h-full w-full relative">
            <TermsSection />
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
