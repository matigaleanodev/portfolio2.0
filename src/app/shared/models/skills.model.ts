export interface SoftSkill {
  id: number;
  name: string;
  description: string;
  image: string;
  createAt?: Date;
}

export interface HardSkill {
  id: number;
  name: string;
  type: 'frontend' | 'backend' | 'tool';
  image: string;
  url: string;
  createAt?: Date;
}

export type CreateSoftSkill = Omit<SoftSkill, 'id' | 'createAt'>;

export type CreateHardSkill = Omit<HardSkill, 'id' | 'createAt'>;
