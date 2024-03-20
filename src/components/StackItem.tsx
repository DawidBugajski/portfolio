import Image from 'next/image';

interface StackItemProps {
  src: string;
  alt: string;
}

function StackItem({ src, alt }: StackItemProps) {
  return (
    <div className='pointer-events-none flex items-center shadow-md dark:border-lines dark:border-[1px] p-2 rounded-lg gap-2 border-transparent border-[1px]'>
      <Image alt={alt} height={30} width={30} src={src} />
      <p className='text-sm font-sans font-semibold text-gray-700'>{alt}</p>
    </div>
  );
}

export default StackItem;
