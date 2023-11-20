import Image from 'next/image';
import Hero from './Components/home/Hero';
import WhyUs from './Components/home/WhyUs';
import HowItWorks from './Components/home/HowItWorks';
import Clients from './Components/home/Clients';
import Form from './Components/contacts/Form';
import ContactUs from './Components/contacts/ContactUs';

// import ContactHero from './Components/contactus/ContactHero'

export default function Home() {
  return (
    <>
      <ContactUs />
      {/* <Hero />
      <main className="max-container w-full flex flex-col">
        <WhyUs />
        <HowItWorks />
        <Clients />
      </main> */}
    </>
  );
}
