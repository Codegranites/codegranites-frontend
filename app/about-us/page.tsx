import Hero from '../Components/about/Hero';
import AboutUs from '../Components/about/AboutUs';
import OurValues from '../Components/about/OurValues';
import Butt from '../Components/about/Butt';

export default function Home() {
  return (
    <>
      <Hero />
      <main className="max-container w-full flex flex-col">
        <AboutUs />
        <OurValues />
        <Butt />
      </main>
    </>
  );
}
