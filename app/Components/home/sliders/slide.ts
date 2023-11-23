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
    name: '— [Damon Willis, CEO, XYZ Company]',
    description:
      ' Codegranites truly exceeded our expectations. Their innovative solutions and dedication to understanding our unique challenges made the collaboration seamless. We not only got a product but a transformative experience.',
  },
  {
    id: 2,
    name: '— [Sarah WIllocks, CEO, XYZ Company]',
    description:
      'Codegranites truly exceeded our expectations. Their innovative solutions and dedication to understanding our unique challenges made the collaboration seamless. We not only got a product but a transformative experience.',
  },
  {
    id: 3,
    name: '— [Jasmine Okoro, CEO, XYZ Company]',
    description:
      'Codegranites truly exceeded our expectations. Their innovative solutions and dedication to understanding our unique challenges made the collaboration seamless. We not only got a product but a transformative experience.',
  },
  {
    id: 4,
    name: '— [Jonathan Nwali, CEO, XYZ Company]',
    description:
      'Working with Codegranites was a game-changer for us. Their teams expertise and commitment to excellence were evident at every stage of the project. We are now equipped with a solution that not only meets but exceeds our business goals',
  },
  {
    id: 5,
    name: '— [Jan Xing, CEO, XYZ Company]',
    description:
      'Codegranites truly exceeded our expectations. Their innovative solutions and dedication to understanding our unique challenges made the collaboration seamless. We not only got a product but a transformative experience.',
  },
  {
    id: 6,
    name: '— [Xao Uchida, CEO, XYZ Company]',
    description:
      'Codegranites truly exceeded our expectations. Their innovative solutions and dedication to understanding our unique challenges made the collaboration seamless. We not only got a product but a transformative experience.',
  },
];

const slideByIdx = (index: number): string => INNOVATION_SLIDES[index % INNOVATION_SLIDES.length].title;

export default slideByIdx;
