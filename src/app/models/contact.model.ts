export interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  createAt: Date;
}

export interface CreateContactDTO {
  name: string;
  email: string;
  message: string;
}
