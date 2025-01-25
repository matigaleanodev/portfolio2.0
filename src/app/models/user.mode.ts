export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

export type LoginUser = Pick<User, 'email' | 'password'>;

export interface LoginResponse {
  access_token: string;
  token_type: string;
  expires_in: string;
}
