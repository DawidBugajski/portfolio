import React from 'react';
import Link from 'next/link';
import { limelight } from '@/app/fonts';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/exprience', label: 'Exprience' },
];

function Navbar() {
  return (
    <div className='flex justify-between py-12'>
      <h1 className={`${limelight.className} text-4xl text-white uppercase`}>
        D_Bugajski
      </h1>
      <div className='flex gap-8'>
        {links.map((link) => (
          <Link
            className={`text-xl 'text-white' hover:text-dark--green transition-colors duration-150`}
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
