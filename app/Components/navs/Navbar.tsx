'use client';

import { NAV_LINKS } from '@/libs/constants';
import cn from '@/utils/tailwind';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import MobileNav from './MobileNav';
import { useStateCtx } from '@/context/StateContext';

const Navbar = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const searchParams = useSearchParams().get('path');

  const [isActive, setIsActive] = useState('');
  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  return (
    <nav className="max-[500px]:py-1 py-4 sm:py-6 px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full justify-between items-center bg-white/80">
      <Link href="/?path=home" className="w-fit max-sm:w-[120px]">
        <Image src="/logo.png" alt="logo" width={155} height={55} />
      </Link>

      <div className="hidden lg:flex items-center gap-x-5 lg:gap-x-7 2xl:gap-x-10 w-full justify-center max-w-[50%] 2xl:max-w-[40%]">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.link === 'home' ? '/?path=home' : `${link.link}?path=${link.link}`}
            key={link.id}
            onClick={() => {
              setIsActive(link.link);
            }}
            className={cn(
              ' w-full text-black  flex justify-center capitalize text-base relative font-medium  before:bg-primary-light before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500 ',
              isActive === link.link ? 'before:w-full text-primary-light' : '',
            )}
          >
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex gap-x-3 xl:gap-x-5 [&>button]:border-primary-light [&>button]:border [&>button]:px-4 [&>button]:py-2 [&>button]:rounded-md [&>button:last-child]:bg-primary-light  [&>button:last-child]:text-white [&>button]:font-medium [&>button]:text-primary-light">
        <button type="button">Login</button>
        <button type="button">Get started</button>
      </div>
      <div
        tabIndex={0}
        className="lg:hidden text-2xl cursor-pointer focus:border border-primary focus:p-1 focus:rounded-md"
        onClick={() => setShowMobileMenu(true)}
      >
        <FaBars />
      </div>

      <MobileNav />
    </nav>
  );
};

export default Navbar;
