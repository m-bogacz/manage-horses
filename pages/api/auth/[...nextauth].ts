import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { Adapter } from 'next-auth/adapters';
import { prisma } from '@/lib/prisma';
import { getUser } from '@/apps/api/modules/user/user.utils';

import { z } from 'zod';

const validateUser = z.object({
  name: z.string(),
  password: z.string(),
});

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma) as Adapter,
  pages: {
    signIn: '/login',
    signOut: '/signout',
    newUser: '/register',
    error: '/error',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        name: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const data = validateUser.parse(credentials);

        const userprisma = await getUser(data.name, data.password);
        if (userprisma) {
          return {
            id: userprisma.id,
            email: userprisma.email,
            username: userprisma.name,
            premissions: userprisma.premissions,
            role: userprisma.role,
            activated: userprisma.activated,
          };
        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user = token.user;
      return session;
    },
  },

  session: { strategy: 'jwt' },
});
