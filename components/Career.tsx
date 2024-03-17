import React from 'react';
import { EXPERIENCE } from '@/constans';

function Career() {
  return (
    <div className='max-w-screen-2xl mx-auto py-8'>
      <h2 className='text-2xl font-bold py-4 text-center'>
        My commercial experience
      </h2>
      <hr className='border-white w-14 mx-auto' />
      <div className='relative mt-8 section-experience after:content-["] after:absolute after:w-1 after:bg-lines after:left-1/2 after:inset-0'>
        {EXPERIENCE.map((item, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <div
              key={item.title}
              className={`flex relative w-jobBox ${isReversed ? 'flex-row-reverse left-jobBox' : ''}`}
            >
              <div className='p-8 relative rounded-jobBox shadow-sm shadow-green bg-[#242424]'>
                <h2 className='text-2xl'>{item.title}</h2>
                <p className='tracking-wide'>{item.content}</p>
              </div>
              <i className='w-10 h-1 mt-8 flex-shrink-0 bg-lines'></i>
              <div className='bg-lines text-white w-16 h-16 rounded-[50%] flex-shrink-0 z-50 flex items-center justify-center mb-3 shadow-sm shadow-green'>
                <div className='flex items-center justify-center text-center font-bold text-sm'>
                  <p>{item.startYear}</p>
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
