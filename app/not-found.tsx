import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='glitch' data-text='GLITCH'>
        GLITCH
      </div>
      <Link href='/'>Return Home</Link>
    </div>
  );
}
