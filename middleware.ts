import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { checkAuthenticationPath } from './utils/middleware/checkAuthenticationPath';

export default async function middleware(req: NextRequest, event: NextFetchEvent) {
  const token = await getToken({ req });
  const isAuthenticated = Boolean(token);

  if (checkAuthenticationPath(req) && isAuthenticated) {
    return NextResponse.redirect(new URL('/horse', req.url));
  }

  const authMiddleware = await withAuth({
    pages: {
      signIn: '/login',
      newUser: '/register',
      verifyRequest: '/not-access',
    },
    callbacks: {
      authorized({ req, token }) {
        if (protectedAdminRoute.includes(req.nextUrl.pathname)) {
          return token?.userRole === 'admin';
        }
        if (!token?.user.activated) {
          return false;
        }

        return !!token;
      },
    },
  });

  // @ts-expect-error
  return authMiddleware(req, event);
}

const protectedAdminRoute = ['/admin', '/admin/users', '/admin/settings', '/admin/permission', '/admin/activate'];

export const config = {
  matcher: ['/horse', '/horse/:name*', '/'],
};
