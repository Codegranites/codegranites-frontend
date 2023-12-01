'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { TERMS_TAGS } from './constants';
import cn from '@/utils/tailwind';

const TermsAside = () => {
  const [activeTag, setActiveTag] = useState(TERMS_TAGS[0].tag);

  return (
    <div className="w-[23%] hidden md:flex md:flex-col lg:flex-col lg:flex py-[1em] pl-[1em] md:sticky top-10 ">
      <div className="text-[1rem] leading-loose font-light flex flex-col gap-y-4">
        {TERMS_TAGS.map((tag) => (
          <Link
            href={`#${tag.tag}`}
            key={tag.id}
            onClick={() => setActiveTag(tag.tag)}
            className={cn('hover:font-medium hover:text-primary transition-colors duration-400', {
              'font-bold text-primary': activeTag === tag.tag,
            })}
          >
            {tag.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TermsAside;
