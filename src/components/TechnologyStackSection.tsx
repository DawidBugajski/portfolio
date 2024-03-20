import StackItem from './StackItem';
import { Logo } from '@/types';

interface TechnologyStackSectionProps {
  logos: Logo[];
}

function TechnologyStackSection({ logos }: TechnologyStackSectionProps) {
  return (
    <>
      <hr className='my-8' />
      <h2 className='text-xl pb-4'>
        Technology stack I had the opportunity to work on
      </h2>
      <div className='flex flex-wrap gap-4'>
        {logos.map((logo, index) => (
          <StackItem key={index} alt={logo.alt} src={logo.src} />
        ))}
      </div>
    </>
  );
}

export default TechnologyStackSection;
