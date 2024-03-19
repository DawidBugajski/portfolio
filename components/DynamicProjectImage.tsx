'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface DynamicProjectImage {
  src: string;
  href: string;
}

function DynamicProject({ src, href }: DynamicProjectImage) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className='aspect-video relative overflow-hidden shadow-xl'>
      <Link href={href} target='_blank' rel='noopener noreferrer'>
        {!imageLoaded && (
          <div className='w-full h-full bg-light_lines animate-pulse'></div>
        )}
        <Image
          src={src}
          alt={src}
          layout='fill'
          objectFit='cover'
          className='lg:grayscale-[50%] hover:scale-110 transition-all duration-150 hover:grayscale-0'
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </Link>
    </div>
  );
}

export default DynamicProject;
