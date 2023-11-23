import Link from 'next/link';
import React from 'react';
import Butt from '../Components/services/Butt';
import Privacy from '../Components/privacy/privacy';
import Hero from '../Components/privacy/hero';

const privacy = [
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    content:
      'At Code Granites, we are committed to protecting your privacy and ensuring the security of your personal information. Our Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website and services.',
  },
  {
    id: 'privacy-policy-covers',
    title: 'What this Privacy Policy Covers',
    content:
      'At Code Granites, we are committed to protecting your privacy and ensuring the security of your personal information. Our Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website and services.',
  },
  {
    id: 'information-collection',
    title: 'Information Collection',
    content:
      'We collect only the necessary information required to provide you with our services and enhance your user experience.',
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content:
      'Your data is treated with the utmost confidentiality, and we employ industry-standard security measures to protect it from unauthorized access.',
  },
  {
    id: 'third-party-disclosure',
    title: 'Third-Party Disclosure',
    content:
      'We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent.',
  },
  {
    id: 'cookie-usage',
    title: 'Cookie Usage',
    content:
      'Our website may use cookies to improve user experience. You can manage cookie preferences through your browser settings.',
  },
];

function Page() {
  return (
    <div className="">
      <Hero />
      <div className="pt-10 md:pt-20 relative px-4 sm:px-8 xl:px-16 2xl:px-24 w-full bg-white/80">
        <Privacy privacy={privacy} />
        <section className="text-header pt-10 pb-16">
          <p className="mb-8">
            By using our services, you agree to the terms outlined in our Privacy Policy. For more details on how we
            handle your data, please review our full Privacy Policy.
          </p>
          <p>
            If you have any questions or concerns, please contact us at{' '}
            <Link className="underline" href="mailto:contact@codegranites.com">
              contact@codegranites.com.
            </Link>
          </p>
        </section>
      </div>
      <Butt />
    </div>
  );
}

export default Page;
