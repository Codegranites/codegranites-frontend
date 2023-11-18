// import icons
import dicover from '../public/icons/discover.svg';
import menuBoard from '../public/icons/menu-board.svg';
import monitor from '../public/icons/monitor.svg';
import people from '../public/icons/people.svg';
import search from '../public/icons/search.svg';
import stack from '../public/icons/stack.svg';

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

export const NAV_LINKS: NavbarLinkProps[] = [
  { id: 1, link: 'home', label: 'home' },
  { id: 2, link: 'services', label: 'services' },
  { id: 3, link: 'about', label: 'about us' },
  { id: 4, link: 'contacts', label: 'contacts' },
];

export const FOOTER_LINKS: FooterLinkProps = {
  company: [
    { id: 1, link: 'services', label: 'services' },
    { id: 2, link: 'about', label: 'about us' },
    { id: 3, link: 'contacts', label: 'contacts' },
    { id: 4, link: 'jobs', label: 'jobs' },
  ],
  help: [
    { id: 1, link: 'faq', label: 'faq' },
    { id: 2, link: 'terms', label: 'terms of services' },
    { id: 3, link: 'privacy', label: 'privacy policy' },
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
