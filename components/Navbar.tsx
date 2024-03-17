'use client';
import React from 'react';
import Link from 'next/link';
import { limelight } from '@/app/fonts';
import { LINKS } from '@/constans';
import { usePathname } from 'next/navigation';
import ThemeSwitch from './ThemeSwitch';

function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  const renderedLinks = LINKS.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`${isActive(link.href) ? 'text-green' : ''} sm:text-xl hover:text-green transition-colors duration-150  `}
    >
      {isActive(link.href) ? `> ${link.label}` : link.label}
    </Link>
  ));

  return (
    <div className='flex items-center sm:justify-between py-4 sm:py-8 border-b-slate-200 dark:border-b-[#292828] border-b-2 px-4 2xl:px-0 flex-col sm:flex-row'>
      <Link
        href='/'
        className={`${limelight.className} text-2xl sm:text-3xl md:text-4xl uppercase hover:text-green transition-colors duration-150`}
      >
        D_Bugajski
      </Link>
      <div className='flex gap-6 md:gap-8 items-center sm:py-0 py-2'>
        {renderedLinks} <ThemeSwitch />
      </div>
    </div>
  );
}

export default Navbar;
