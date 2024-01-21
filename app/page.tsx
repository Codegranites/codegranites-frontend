import Hero from './Components/home/Hero';
import WhyUs from './Components/home/WhyUs';

import Clients from './Components/home/Clients';
import { FAQs } from './Components/home/FAQs';
import HowItWorks from './Components/home/HowItWorks';
import Butt from './Components/services/Butt';

export default function Home() {
  return (
    <>
      <Hero />
      <main className="max-container w-full flex flex-col">
        <WhyUs />
        <HowItWorks />

        {/* <Clients /> */}
        <FAQs />
      </main>
      <Butt />
    </>
  );
}
