/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useStateCtx } from '@/context/StateContext';
import { NAV_LINKS } from '@/libs/constants';
import cn from '@/utils/tailwind';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BsX } from 'react-icons/bs';

const MobileNav = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();

  const [isActive, setIsActive] = useState('');
  const searchParams = useSearchParams().get('path');

  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showMobileMenu]);

  return (
    <>
      <div
        className={cn(
          'lg:hidden fixed min-h-screen w-full bg-black/50 top-0 left-0 z-20 transition-all duration-300',
          showMobileMenu ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
        onClick={() => setShowMobileMenu(false)}
      />
      <nav
        className={cn(
          'pt-20 lg:hidden py-4 sm:py-6 px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full max-w-[300px] sm:max-w-[70%] md:max-w-[50%] justify-between items-center bg-white/80 backdrop-blur-lg fixed right-0 top-0 z-50 h-screen transition-all opacity-0',
          showMobileMenu ? 'translate-x-0 duration-1000 opacity-100' : 'translate-x-full duration-300',
        )}
      >
        <button
          aria-label="close menu"
          type="button"
          className="outline-none text-primary text-2xl sm:text-4xl absolute top-2 right-2 h-12 w-12 rounded-full border focus:border-2 border-primary focus:border-black flex justify-center items-center"
          onClick={() => setShowMobileMenu(false)}
          tabIndex={0}
        >
          <BsX />
        </button>
        <div className="flex flex-col items-start h-full gap-y-10 ">
          {NAV_LINKS.map((link) => (
            <Link
              aria-label={link.label}
              href={link.link === 'home' ? '/?path=home' : `${link.link}?path=${link.link}`}
              key={link.id}
              onClick={() => {
                setIsActive(link.link);
                setShowMobileMenu(false);
              }}
              className={cn(
                '  text-black  flex justify-center capitalize relative font-medium  before:bg-primary-light before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500 text-lg',
                isActive === link.link ? 'before:w-full text-primary-light' : '',
              )}
            >
              {link.label}
              {/* <span>{link.label}</span> */}
            </Link>
          ))}
          <div className="lg:hidden flex flex-col gap-y-5 [&>button]:border-primary-light [&>button]:border [&>button]:px-4 [&>button]:py-2 [&>button]:rounded-md [&>button:last-child]:bg-primary-light  [&>button:last-child]:text-white [&>button]:font-medium [&>button]:text-primary-light">
            <button type="button">Login</button>
            <button type="button">Get started</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
