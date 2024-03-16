import Link from 'next/link';
import { ReactNode, FunctionComponent } from 'react';

interface SocialLinkProps {
  href: string;
  children: ReactNode;
  icon: FunctionComponent<{ className: string }>;
  newTab?: boolean;
}

function SocialLink({
  href,
  children,
  icon: Icon,
  newTab = true,
}: SocialLinkProps) {
  return (
    <Link
      href={href}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : undefined}
      className='flex items-center gap-2 hover:text-green transition-colors duration-150'
    >
      <Icon className='h-8 w-8' />
      {children}
    </Link>
  );
}

export default SocialLink;
