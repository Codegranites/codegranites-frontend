import React from 'react';
import mvImg from '../../../public/mission-vision.png';
import Image from 'next/image';
function MissionVision() {
  return (
    <section className="flex lg:flex-row flex-col-reverse justify-between md:text-xl text-base md:leading-8 leading-[30px] w-full xl:px-[100px] lg:px-[60px] md:px-10 px-6 text-[#111111] lg:gap-x-20 gap-y-10 py-10 md:py-14 lg:py-20">
      <div className="space-y-14">
        <div className="space-y-4">
          <h2 className="md:text-[40px] text-2xl text-[#161616] md:leading-[56px] leading-10 md:font-semibold font-medium">
            Our Mission
          </h2>
          <p className="xl:w-[644px] w-full">
            To transform challenges into opportunities through the power of code, driving digital evolution and
            fostering innovation.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="md:text-[40px] text-2xl text-[#161616] md:leading-[56px] leading-10 md:font-semibold font-medium">
            Our Vison
          </h2>
          <p className="xl:w-[644px] w-full">
            Empowering businesses worldwide with cutting-edge technology, becoming a catalyst for positive change.
          </p>
        </div>
      </div>
      <div className="w-full">
        <Image src={mvImg} alt="Image" className="lg::w-[504px] w-full lg:h-[423px] h-full" />
      </div>
    </section>
  );
}

export default MissionVision;
