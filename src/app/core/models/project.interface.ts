export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: ProjectCategory;
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
  createdAt: Date;
}

export enum ProjectCategory {
  FULLSTACK = 'fullstack',
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  MOBILE = 'mobile'
}
