type InnovationProps = {
  id?: number;
  title: string;
  description: string;
};
export type ClientSliderProps = {
  id?: number;
  name: string;
  description: string;
  currIdx?: number;
};

export const INNOVATION_SLIDES: InnovationProps[] = [
  {
    id: 1,
    title: 'Innovative Visionaries',
    description:
      'Embrace the future with a team of creative minds dedicated to pushing the boundaries of technology. Our innovative approach ensures your project is not just delivered but transformed into a groundbreaking solution',
  },
  {
    id: 2,
    title: 'Tailored Solution, Every time',
    description:
      'We understand that every challenge is unique, Our experts work closely with you to craft bespoke IT solutions that precisely address your specific needs, ensuring unparalleled results.',
  },
  {
    id: 3,
    title: 'Future-ready Technology',
    description:
      'Stay ahead in a rapidly evolving digital landscape. CodeGranites leverages the latest technologies to ensure your project is not just current but future-proof, prodiving lasting value and adaptability.',
  },
  {
    id: 4,
    title: 'Passion for positive impact',
    description:
      'Beyond technology, we are driven by passion for creating positive change. Join us in harnessing the power of IT to overcome societal challenges and make a meaningful impact on the world',
  },
  {
    id: 5,
    title: 'Transparent Collaboration',
    description:
      'Experience a partnership built on trust and transparency. Throughout the project lifecycle, we keep you informed, involved and empowered, fostering a collaborative environment that ensures project success.',
  },
  {
    id: 6,
    title: 'Uncompromising Quality',
    description:
      'Quality is at the core of everything we do. CodeGranites is committed to delivering solutions that not only meet but exceed industry standards. Your success is our success.',
  },
];

export const CLIENT_SLIDES: ClientSliderProps[] = [
  {
    id: 1,
    name: 'Damon Willis, CEO, Apple',
    description:
      ' Codegranites truly exceeded our expectations. Their innovative solutions and dedication to understanding our unique challenges made the collaboration seamless. We not only got a product but a transformative experience.',
  },
  {
    id: 2,
    name: 'Arinze, CEO, Github',
    description:
      'Codegranites is a leading provider of digital content and services. We are committed to delivering exceptional content for our clients.',
  },
  {
    id: 3,
    name: 'Paul Wilson, AI, Flexable AI',
    description:
      'Flexable AI is a leading provider of digital content and services. We are committed to delivering exceptional content for our clients.',
  },
  {
    id: 4,
    name: 'Mimi Kibet, CTO, SaaS Company',
    description:
      'SaaS is a leading provider of digital content and services. We are committed to delivering exceptional content for our clients.',
  },
  {
    id: 5,
    name: 'Ashley Smith, CEO, Commerce X',
    description:
      'Commerce X is an online e-commerce platform. We are committed to delivering exceptional content for our clients.',
  },
];

const slideByIdx = (index: number): string => INNOVATION_SLIDES[index % INNOVATION_SLIDES.length].title;

export default slideByIdx;
