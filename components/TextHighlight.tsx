import { ReactNode } from 'react';

interface TextHighlightProps {
  children: ReactNode;
}

function TextHighlight({ children }: TextHighlightProps) {
  return (
    <span className='decoration-green underline underline-offset-2 decoration-2'>
      {children}
    </span>
  );
}

export default TextHighlight;
