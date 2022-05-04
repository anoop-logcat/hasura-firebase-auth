import { User, UserCredential } from 'firebase/auth';

export interface AuthContextDTO {
  currentUser: User;
  login(email: string, password: string): Promise<UserCredential>;
  register(email: string, password: string): Promise<UserCredential>;
  logout(): Promise<void>;
  resetPassword(email: string): Promise<void>;
  changeEmail(user: User, newEmail: string): Promise<void>;
  changePassword(user: User, newPassword: string): Promise<void>;
}
