import { Project, Logo } from '@/types';
import ProjectItem from './ProjectItem';

interface ProjectListProps {
  projects: Project[];
  logos: Logo[];
}

function ProjectsList({ projects, logos }: ProjectListProps) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectItem key={project.title} project={project} logos={logos} />
      ))}
    </div>
  );
}

export default ProjectsList;
