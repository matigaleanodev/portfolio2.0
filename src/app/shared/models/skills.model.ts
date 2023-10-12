import { Profile } from './profile.model';

export interface SoftSkill {
  id: number;
  name: string;
  description: string;
  image: string;
  profile?: Profile;
  createAt?: Date;
}

export interface HardSkill {
  id: number;
  name: string;
  type: skillType;
  image: string;
  url: string;
  profile?: Profile;
  createAt?: Date;
}

export interface CreateSoftSkill
  extends Omit<SoftSkill, 'profile' | 'createAt'> {
  profileId: number;
}

export interface CreateHardSkill
  extends Omit<HardSkill, 'profile' | 'createAt'> {
  profileId: number;
}

export type skillType = 'frontend' | 'backend' | 'tool';
