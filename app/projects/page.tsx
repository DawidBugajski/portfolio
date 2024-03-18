import { LOGOS, PROJECTS } from '@/constans';
import StackItem from '@/components/StackItem';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <h1 className='text-2xl font-bold text-center py-4'>
        Projects I&#39;ve been involved in
      </h1>
      <hr className='dark:border-white w-14 mx-auto' />
      <div className='mt-8'>
        {PROJECTS.map((project) => (
          <div className='py-4 lg:py-8 relative' key={project.title}>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-8 even:md:grid-flow-row-dense'>
              <Link
                className='text-2xl hover:text-green transition-colors duration-150 block xl:hidden'
                href={project.href}
                target='_blank'
                rel='noopener noreferrer'
              >
                {project.title}
              </Link>
              <div className='aspect-video relative overflow-hidden shadow-xl'>
                <Link
                  href={project.href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src={project.src}
                    alt={project.src}
                    layout='fill'
                    objectFit='cover'
                    className='lg:grayscale-[50%] hover:scale-110 transition-all duration-150 hover:grayscale-0'
                  />
                </Link>
              </div>
              <div className='flex flex-col justify-center gap-4'>
                <Link
                  className='text-2xl hover:text-green transition-colors duration-150 hidden xl:block'
                  href={project.href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {project.title}
                </Link>
                <p className='border-l-2 border-green pl-4'>
                  {project.content}
                </p>
                <div className='flex gap-4 flex-wrap'>
                  {project.technologies.map((tech) => {
                    const logo = LOGOS.find((logo) => logo.alt === tech);
                    if (!logo) return null;
                    return (
                      <div key={logo.alt}>
                        <StackItem src={logo.src} alt={logo.alt} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className='my-8' />

      <h2 className='text-xl pb-4'>
        Technology stack I had the opportunity to work on
      </h2>
      <div className='flex flex-wrap gap-4'>
        {LOGOS.map((logo, index) => (
          <StackItem key={index} alt={logo.alt} src={logo.src} />
        ))}
      </div>
    </>
  );
}
