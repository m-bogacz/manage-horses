import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // if (protectedAdminRoute.includes(req.nextUrl.pathname)) {
      //   console.log('token', token);
      //   return token?.userRole === 'admin';
      // }
      if (!token?.user.activated) {
        return false;
      }

      return !!token;
    },
  },
});

const protectedAdminRoute = ['/admin', '/admin/users', '/admin/settings', '/admin/permission', '/admin/activate'];

// export const config = {
//   matcher: ['/horse', '/horse/:name*', '/'],
// };
