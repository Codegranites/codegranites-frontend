import Image from 'next/image';
import Hero from './Components/home/Hero';
import WhyUs from './Components/home/WhyUs';
import HowItWorks from './Components/about/OurValues';
import Clients from './Components/home/Clients';

export default function Home() {
  return (
    <>
      <Hero />
      <main className="max-container w-full flex flex-col">
        <WhyUs />
        <HowItWorks />
        <Clients />
      </main>
    </>
  );
}
