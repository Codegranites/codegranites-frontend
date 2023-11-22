// import icons
import dicover from '../public/icons/discover.svg';
import menuBoard from '../public/icons/menu-board.svg';
import monitor from '../public/icons/monitor.svg';
import people from '../public/icons/people.svg';
import search from '../public/icons/search.svg';
import stack from '../public/icons/stack.svg';
import value from '../public/value.svg';

export type NavbarLinkProps = {
  id?: number;
  link: string;
  label: string;
};

export type FooterLinkProps = {
  company: NavbarLinkProps[];
  help: NavbarLinkProps[];
  emails: { id?: number; email: string }[];
};
export type HowItWorksProps = {
  id?: number;
  title: string;
  description: string;
  icon: string;
};
export type OurValuesProps = {
  id?: number;
  title: string;
  description: string;
  icon: string;
};
export type ServicesProps = {
  id?: number;
  title: string;
  description: string;
  icon: string;
};

export type FAQsProps = {
  id: number;
  question: string;
  answer: string;
};

export const NAV_LINKS: NavbarLinkProps[] = [
  { id: 1, link: 'home', label: 'home' },
  { id: 2, link: 'services', label: 'services' },
  { id: 3, link: 'about-us', label: 'about us' },
  { id: 4, link: 'contacts', label: 'contacts' },
];

export const FOOTER_LINKS: FooterLinkProps = {
  company: [
    { id: 1, link: 'services?path=services', label: 'services' },
    { id: 2, link: 'about?path=about', label: 'about us' },
    { id: 3, link: 'contacts?path=contacts', label: 'contacts' },
    { id: 4, link: 'jobs?path=jobs', label: 'jobs' },
  ],
  help: [
    { id: 1, link: 'faq?path=faq', label: 'faq' },
    { id: 2, link: 'terms?path=terms', label: 'terms of services' },
    { id: 3, link: 'privacy?path=privacy', label: 'privacy policy' },
  ],
  emails: [
    { id: 1, email: 'Info@codesgranite.com' },
    { id: 2, email: 'Info@codesgranite.com' },
    { id: 3, email: 'Info@codesgranite.com' },
  ],
};

export const HOW_IT_WORKS: HowItWorksProps[] = [
  {
    id: 1,
    title: 'Discovery & Consultation',
    description:
      'Kickstart the journey with an in-depth consultation. We delve into your project requirements, goals, and challenges. This phase is crucial for understanding your vision and aligning our expertise with your expectations.',
    icon: dicover,
  },
  {
    id: 2,
    title: 'Strategic Planning',
    description:
      'Our seasoned experts craft a customized plan tailored to your unique needs. This strategic roadmap outlines key milestones, timelines, and deliverables, ensuring clarity and alignment throughout the project.',
    icon: menuBoard,
  },
  {
    id: 3,
    title: 'Development & Prototyping',
    description:
      'Watch your vision take shape as our skilled development team brings concepts to life. We create prototypes and iterative versions, providing you with a tangible understanding of the evolving solution and room for feedback.',
    icon: monitor,
  },
  {
    id: 4,
    title: 'Collaborative Feedback',
    description:
      'Collaboration is at the heart of our process. Regular feedback loops allow you to actively participate in shaping the solution. Your insights guide the refinement process, ensuring the final product meets your expectations.',
    icon: people,
  },
  {
    id: 5,
    title: 'Rigorous Testing',
    description:
      'Prior to launch, we subject the solution to rigorous testing. Our quality assurance team performs comprehensive tests, ensuring functionality, security, and optimal performance. We leave no stone unturned in delivering a robust product',
    icon: search,
  },
  {
    id: 6,
    title: 'Deployment & Integration',
    description:
      'Seamlessly integrate the solution into your existing infrastructure or launch it to the public. Our deployment process is meticulous, ensuring a smooth transition and minimal disruption to your operations.',
    icon: stack,
  },
];

export const OurValues: OurValuesProps[] = [
  {
    id: 1,
    title: 'Innovation',
    description: 'We thrive on pushing boundaries and exploring new horizons.',
    icon: value,
  },
  {
    id: 2,
    title: 'Collaboration',
    description: 'Working together to achieve shared success and surpass expectations.',
    icon: value,
  },
  {
    id: 3,
    title: 'Excellence',
    description: 'Striving for the highest standards in everything we do.',
    icon: value,
  },
];

export const Services: ServicesProps[] = [
  {
    id: 1,
    title: 'Custom Software Development:',
    description: 'Tailored solutions to meet your unique business needs, driving efficiency and growth.',
    icon: dicover,
  },
  {
    id: 2,
    title: 'Web and Mobile Applications',
    description: 'Engaging and responsive applications that elevate your online presence and user experience.',
    icon: menuBoard,
  },
  {
    id: 3,
    title: 'Digital Transformation',
    description:
      'Guiding your business through the digital evolution, ensuring relevance and agility in a rapidly changing landscape.',
    icon: monitor,
  },
  {
    id: 4,
    title: 'Consulting and Strategy',
    description:
      'Strategic insights to align your technology initiatives with your business goals, optimizing performance and ROI.',
    icon: people,
  },
  {
    id: 5,
    title: 'App Development',
    description:
      'Strategic insights to align your technology initiatives with your business goals, optimizing performance and ROI.',
    icon: search,
  },
  {
    id: 6,
    title: 'Deployment & Integration',
    description:
      'Guiding your business through the digital evolution, ensuring relevance and agility in a rapidly changing landscape.',
    icon: stack,
  },
];

export const FAQS: FAQsProps[] = [
  {
    id: 1,
    question: 'What sets Codegranites apart from other IT service providers?',
    answer:
      'At Codegranites, we stand out through our commitment to innovation, tailor-made solutions, and a client-centric approach. We prioritize understanding your unique challenges to deliver transformative results.',
  },
  {
    id: 2,
    question: 'How do I submit a project proposal to CodeGranites?',
    answer:
      'Submitting a project proposal is easy! Just fill our submission form. Provide the necessary details, and our team will get in touch with you promptly',
  },
  {
    id: 3,
    question: 'What type of projects does CodeGranites specialize in?',
    answer:
      'We specialize in a wide range of projects, including IT consulting, custom software development, emerging technologies integration, digital transformation, cybersecurity solutions, and cloud computing.',
  },
  {
    id: 4,
    question: 'Can I get a consultation before starting a project with CodeGranites?',
    answer:
      'Absolutely! We offer initial consultations to understand your project requirements and discuss potential solutions. Get in touch here',
  },
];
