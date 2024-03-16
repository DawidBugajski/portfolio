import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className='text-center py-8'>
      <span className='relative inline-block p-1 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green'>
        <span className='relative font-bold text-lg'>{children}</span>
      </span>
    </div>
  );
}

export default SectionTitle;
