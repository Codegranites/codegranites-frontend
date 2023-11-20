import Hero from '../Components/services/Hero';
import OurServices from '../Components/services/OurServices';
import Butt from '../Components/services/Butt';
import Desc from '../Components/services/Desc';

export default function Home() {
  return (
    <>
      <Hero />
      <main className="max-container w-full flex flex-col">
        <Desc />
        <OurServices />
        <Butt />
      </main>
    </>
  );
}
