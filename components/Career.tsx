import React from 'react';
import { EXPERIENCE } from '@/constans';

function Career() {
  return (
    <div className='min-[1700px]:w-full w-11/12 mx-auto py-4'>
      <h2 className='text-2xl font-bold text-center py-4'>
        My commercial experience
      </h2>
      <hr className='dark:border-white w-14 mx-auto' />
      <div className='relative mt-8 section-experience after:content-["] after:absolute after:w-1 dark:after:bg-lines xl:after:left-1/2 after:left-8 after:inset-0 after:bg-[#E2E8F0]'>
        {EXPERIENCE.map((item, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <div
              key={item.title}
              className={`xl:m-0 mb-8 flex relative flex-row-reverse xl:flex-row xl:w-jobBox ${isReversed ? 'xl:flex-row-reverse xl:left-jobBox' : ''}`}
            >
              <div className='bg-white p-2 xl:p-8 relative rounded-jobBox shadow-sm shadow-green dark:bg-[#242424]'>
                <h2 className='text-lg xl:text-2xl mb-2'>{item.title}</h2>
                <p className='tracking-wide'>{item.content}</p>
              </div>
              <i className='w-10 h-1 mt-8 flex-shrink-0 dark:bg-lines bg-[#E2E8F0]'></i>
              <div className='dark:bg-lines bg-white w-16 h-16 rounded-[50%] flex-shrink-0 z-50 flex items-center justify-center mb-3 shadow-sm shadow-green'>
                <div className='flex items-center justify-center text-center font-bold text-sm'>
                  <p className='text-2xl font-bold'>{item.startYear}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Career;
