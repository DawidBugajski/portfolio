import type { Metadata } from 'next';
import { LOGOS, PROJECTS } from '@/constans';
import PageTitle from '@/components/PageTitle';
import ProjectsList from '@/components/ProjectsList';
import TechnologyStackSection from '@/components/TechnologyStackSection';

export const metadata: Metadata = {
  title: 'Dawid Bugajski - Projects',
  description: 'Frotend developer',
};

export default function Projects() {
  return (
    <>
      <PageTitle>Projects I&apos;ve been involved in</PageTitle>
      <ProjectsList projects={PROJECTS} logos={LOGOS} />
      <TechnologyStackSection logos={LOGOS} />
    </>
  );
}
