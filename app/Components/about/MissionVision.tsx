import React from 'react';
import mvImg from '../../../public/mission-vision.png';
import Image from 'next/image';
function MissionVision() {
  return (
    <section>
      <div>
        <div>
          <h2>Our Mission</h2>
          <p>
            To transform challenges into opportunities through the power of code, driving digital evolution and
            fostering innovation.
          </p>
        </div>
        <div>
          <h2>Our Vison</h2>
          <p>Empowering businesses worldwide with cutting-edge technology, becoming a catalyst for positive change.</p>
        </div>
      </div>
      <div>
        <Image width={504} height={423} src={mvImg} alt="Image" />
      </div>
    </section>
  );
}

export default MissionVision;
