import { EXPERIENCE } from '@/constans';

function Career() {
  return (
    <div>
      <h2 className='text-2xl font-bold text-center py-4'>
        My commercial experience
      </h2>
      <hr className='dark:border-white w-14 mx-auto' />
      <div className='relative mt-8 section-experience after:content-[""] after:absolute after:w-1 dark:after:bg-lines xl:after:left-1/2 after:left-8 after:inset-0 after:bg-light_lines'>
        {EXPERIENCE.map((item) => (
          <div
            key={item.title}
            className='xl:even:flex-row-reverse xl:even:left-jobBox xl:m-0 mb-8 flex relative flex-row-reverse xl:flex-row xl:w-jobBox'
          >
            <div className='bg-white p-2 sm:p-4 lg:p-8 relative rounded-jobBox shadow-sm shadow-green dark:bg-[#242424]'>
              <h2 className='text-lg sm:text-2xl mb-2'>{item.title}</h2>
              <p className='tracking-wide'>{item.content}</p>
            </div>
            <i className='w-4 lg:w-10 h-1 mt-8 flex-shrink-0 dark:bg-lines bg-light_lines'></i>
            <div className='dark:bg-lines bg-white w-16 h-16 rounded-[50%] flex-shrink-0 z-50 flex items-center justify-center mb-3 shadow-sm shadow-green'>
              <div className='flex items-center justify-center text-center font-bold text-sm'>
                <p className='text-2xl font-bold'>{item.startYear}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Career;
