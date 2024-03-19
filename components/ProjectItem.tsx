import Image from 'next/image';
import Link from 'next/link';
import StackItem from './StackItem';
import { Project, Logo } from '@/types';
import DynamicImage from './DynamicImage';

interface ProjectItemProps {
  project: Project;
  logos: Logo[];
}

function ProjectItem({ project, logos }: ProjectItemProps) {
  return (
    <div className='py-4 lg:py-8 relative'>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-8 even:md:grid-flow-row-dense'>
        <Link
          className='text-2xl hover:text-green transition-colors duration-150 block xl:hidden'
          href={project.href}
          target='_blank'
          rel='noopener noreferrer'
        >
          {project.title}
        </Link>
        <DynamicImage src={project.src} href={project.href} />
        <div className='flex flex-col justify-center gap-4'>
          <Link
            className='text-2xl hover:text-green transition-colors duration-150 hidden xl:block'
            href={project.href}
            target='_blank'
            rel='noopener noreferrer'
          >
            {project.title}
          </Link>
          <p className='border-l-2 border-green pl-4'>{project.content}</p>
          <div className='flex gap-4 flex-wrap'>
            {project.technologies.map((tech) => {
              const logo = logos.find((logo) => logo.alt === tech);
              return (
                logo && (
                  <StackItem key={logo.alt} src={logo.src} alt={logo.alt} />
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
