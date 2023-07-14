import { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface User extends DefaultUser {
    activated?: boolean;
  }
  interface Session {
    user: {
      id: string;
      username?: string | null;
      role?: 'user' | 'admin';
    } & User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      id: string;
      username?: string | null;
      role?: 'user' | 'admin';
      activated?: boolean;
    };
  }
}
