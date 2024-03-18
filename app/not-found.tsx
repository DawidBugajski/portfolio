import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex justify-center items-center flex-col h-full'>
      <div className='glitch text-center' data-text='404'>
        404
      </div>
      <Link
        className='text-4xl hover:text-green transition-colors duration-150'
        href='/'
      >
        Return Home
      </Link>
    </div>
  );
}
