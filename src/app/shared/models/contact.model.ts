export interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  createAt: Date;
}

export type CreateContactDTO = Omit<Contact, 'id' | 'createAt'>;
