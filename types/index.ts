export interface Logo {
  src: string;
  alt: string;
}

export interface Link {
  href: string;
  label: string;
}

export interface Experience {
  startYear: string;
  title: string;
  content: string;
}

export interface Project {
  title: string;
  src: string;
  href: string;
  content: string;
  technologies: string[];
  repoHref?: string;
  repoSrc?: string;
  status?: string;
}
