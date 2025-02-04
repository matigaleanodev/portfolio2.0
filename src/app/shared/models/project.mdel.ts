export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  frontUrl: string | null;
  backUrl: string | null;
  demoUrl: string | null;
  createdAt?: string;
  delay?: number;
}

export interface CreateProject
  extends Omit<Project, 'profile' | 'createAt' | 'delay'> {
  profileId: number;
}
