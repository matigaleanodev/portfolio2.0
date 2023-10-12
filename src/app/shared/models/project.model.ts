import { Profile } from './profile.model';

export interface Project {
  id: number;
  profile?: Profile;
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

export interface CreateProject
  extends Omit<Project, 'profile' | 'createAt' | 'delay'> {
  profileId: number;
}
