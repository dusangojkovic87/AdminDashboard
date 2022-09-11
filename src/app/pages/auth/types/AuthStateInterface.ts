import { User } from 'src/app/interfaces/User';

export interface AuthStateInterface {
  isAuthenticated: boolean;
  currentUser: User | null;
}
