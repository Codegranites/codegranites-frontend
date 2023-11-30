import Link from 'next/link';
import React from 'react';

const TermsAside = () => {
  return (
    <div className="w-[23%] hidden md:flex md:flex-col lg:flex-col lg:flex py-[1em] pl-[1em] md:sticky top-10 ">
      <p className="text-[1rem] leading-loose font-bold">Interpretation and Definitions</p>
      <div className="text-[1rem] leading-loose font-light flex flex-col gap-y-4">
        <Link href="#">Acknowledgment</Link>
        <Link href="#">User Accounts</Link>
        <Link href="#">Content</Link>
        <Link href="#">Copyright Policy</Link>
        <Link href="#">Intellectual Property</Link>
        <Link href="#">Your Feedback to Us</Link>
        <Link href="#">Links to Other Websites</Link>
        <Link href="#">Limitation of Liability</Link>
        <Link href="#">&quot;AS IS&quot; and &quot;AS AVAILABLE&quot;</Link>
        <Link href="#">Disclaimer</Link>
        <Link href="#">Governing Law</Link>
        <Link href="#">Disputes Resolution</Link>
        <Link href="#">For European Union (EU)</Link>
        <Link href="#">Users</Link>
        <Link href="#">United States Legal</Link>
        <Link href="#">Compliance</Link>
        <Link href="#">Severability and Waiver</Link>
        <Link href="#">Changes to These Terms and Conditions</Link>
      </div>
    </div>
  );
};

export default TermsAside;
