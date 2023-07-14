export interface UserType {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  activated: boolean;
  image: string;
  password: string;
  premissions: string[];
}
