export interface Project {
  id: number;
  profileId?: number;
  name: string;
  description: string;
  date: string;
  image: string;
  frontUrl: string;
  backUrl: string;
  demoUrl: string;
  createAt?: Date;
  delay?: number;
}

export type CreateProject = Omit<Project, 'id' | 'createAt' | 'delay'>;
