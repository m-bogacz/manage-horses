import { NextRequest } from 'next/server';

export const checkAuthenticationPath = (req: NextRequest) => {
  if (req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/register')) {
    return true;
  }

  return false;
};
