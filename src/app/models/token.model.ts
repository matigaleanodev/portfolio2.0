import { User } from './user.model';

export interface TokenData {
  user: User;
  iat: number;
  exp: number;
}
