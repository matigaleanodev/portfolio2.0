import { Project } from './project.model';
import { HardSkill, SoftSkill } from './skills.model';

export interface Profile {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface ProfileDTO extends Profile {
  projects: Project[];
  softSkills: SoftSkill[];
  hardSkills: HardSkill[];
}
