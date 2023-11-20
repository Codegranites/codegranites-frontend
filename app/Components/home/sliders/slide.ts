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
    title: 'Creative Fusion',
    description:
      'Explore boundless creativity as we blend artistry with technology. Our team envisions and delivers digital solutions that redefine the way we experience the online world.',
  },
  {
    id: 3,
    title: 'Digital Excellence',
    description:
      'Embark on a journey of digital excellence. We meticulously craft each project, ensuring it not only meets but exceeds the highest standards of innovation and functionality.',
  },
  {
    id: 4,
    title: 'Future-Forward Solutions',
    description:
      'Step into the future with our cutting-edge solutions. We anticipate trends, adapt to change, and build the next generation of digital experiences for your success.',
  },
  {
    id: 5,
    title: 'Coding Dreams into Reality',
    description:
      'At the core of our mission is turning dreams into reality through code. Join us on a journey where every line of code propels your vision closer to fruition.',
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
