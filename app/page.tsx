import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';
import SocialLink from '@/components/SocialLink';
import AboutContent from '@/components/AboutContent';

export default function Home() {
  return (
    <>
      <h1 className='py-4 sm:py-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  bg-gradient-to-r from-green to-gray inline-block text-transparent bg-clip-text'>
        Crafting Interactive Experiences with Precision and Passion...
      </h1>
      <div className='flex items-center justify-between gap-4 sm:gap-12 flex-col lg:flex-row'>
        <div className='relative w-52 h-52 sm:w-[260px] sm:h-[260px] rounded-full bg-gradient-custom flex justify-center items-center shrink-0'>
          <div id='profile'>
            <Image
              className='rounded-full scale-95'
              fill
              alt='Dawid Bugajski'
              src='/profile-picture.jpg'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <AboutContent />
        </div>
      </div>
      <div className='text-center py-8'>
        <span className='relative inline-block p-1 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green'>
          <span className='relative font-bold text-lg'>Contact me</span>
        </span>
      </div>
      <div className='space-y-4'>
        <div className='flex justify-center gap-4'>
          <SocialLink href='https://github.com/DawidBugajski' icon={FaGithub}>
            GitHub
          </SocialLink>
          <SocialLink
            href='https://www.linkedin.com/in/dawidbugajski96/'
            icon={FaLinkedin}
          >
            Linkedin
          </SocialLink>
          <SocialLink href='/docs/resume.pdf' icon={IoDocumentAttachOutline}>
            Resume
          </SocialLink>
        </div>
        <div className='flex justify-center'>
          <SocialLink
            href='mailto:dawidbugajski1996@gmail.com'
            icon={IoIosMail}
            newTab={false}
          >
            dawidbugajski1996@gmail.com
          </SocialLink>
        </div>
      </div>
    </>
  );
}
