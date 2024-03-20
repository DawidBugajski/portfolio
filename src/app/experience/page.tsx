import Career from '@/components/Career';
import PageTitle from '@/components/PageTitle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dawid Bugajski - Exprience',
  description: 'Frotend developer',
};

export default function Exprience() {
  return (
    <>
      <PageTitle>My commercial experience</PageTitle>
      <Career />
    </>
  );
}
