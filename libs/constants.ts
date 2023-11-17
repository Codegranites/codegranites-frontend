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
