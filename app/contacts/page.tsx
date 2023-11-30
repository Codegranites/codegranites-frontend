import ContactHero from './ContactHero';
import { FAQs } from '../Components/home/FAQs';
import Butt from '../Components/services/Butt';
import FormContainer from './FormContainer';

const ContactUs = () => {
  return (
    <>
      <ContactHero />
      <FormContainer />
      <FAQs />
      <Butt />
    </>
  );
};

export default ContactUs;
