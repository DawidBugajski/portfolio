import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div className='glitch text-center' data-text='404'>
        404
      </div>
      <Link
        className='text-center -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 text-4xl hover:text-green transition-colors duration-150'
        href='/'
      >
        Return Home
      </Link>
    </>
  );
}
