import Image from 'next/image';
import Hero from './Components/home/Hero';
import WhyUs from './Components/home/WhyUs';

export default function Home() {
  return (
    <>
      <Hero />
      <main className="max-container w-full flex flex-col">
        <WhyUs />
      </main>
    </>
  );
}
