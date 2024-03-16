'use client';
import React from 'react';
import Link from 'next/link';
import { limelight } from '@/app/fonts';
import { LINKS } from '@/constans';
import { usePathname } from 'next/navigation';
import IconMoon from './IconMoon';
import IconSun from './IconSun';

function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  const renderedLinks = LINKS.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`${isActive(link.href) ? 'text-green' : ''} text-xl hover:text-green transition-colors duration-150`}
    >
      {isActive(link.href) ? `> ${link.label}` : link.label}
    </Link>
  ));

  return (
    <>
      <div className='flex justify-between py-8 border-b-[#292828] border-b-2'>
        <Link
          href='/'
          className={`${limelight.className} text-4xl text-white uppercase hover:text-green transition-colors duration-150`}
        >
          D_Bugajski
        </Link>
        <div className='flex gap-8 items-center'>
          {renderedLinks}
          <IconMoon className='text-green h-5 w-5 hover:text-white' />
          <IconSun className='text-green h-5 w-5 hover:text-white' />
        </div>
      </div>
    </>
  );
}

export default Navbar;
