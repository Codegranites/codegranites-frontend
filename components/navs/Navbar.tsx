"use client";

import { NAV_LINKS } from "@/libs/constants";
import cn from "@/utils/tailwind";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isActive, setIsActive] = useState("");
  const searchParams = useSearchParams().get("path");

  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  return (
    <nav className="py-4 sm:py-6 px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full justify-between items-center bg-white/80">
      <div className="w-fit">
        <Image src="/logo.png" alt="logo" width={155} height={55} />
      </div>

      <div className="hidden lg:flex items-center gap-x-5 lg:gap-x-7 2xl:gap-x-10 w-full justify-center max-w-[50%] 2xl:max-w-[40%]">
        {NAV_LINKS.map((link) => (
          <Link
            href={
              link.link === "home"
                ? "/?path=home"
                : `${link.link}?path=${link.link}`
            }
            key={link.id}
            onClick={() => {
              setIsActive(link.link);
            }}
            className={cn(
              " w-full text-black  flex justify-center capitalize text-base relative font-medium  before:bg-primary-light before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500 ",
              isActive === link.link ? "before:w-full text-primary-light" : "",
            )}
          >
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex">[Button] [Button]</div>
      <div className="lg:hidden text-2xl">
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
