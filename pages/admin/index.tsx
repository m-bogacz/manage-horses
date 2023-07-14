import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]';
import { prisma } from '@/lib/prisma';
import { ReactElement } from 'react';
import { UserType } from '@/utils/types/user';
import { Session } from 'next-auth';
import { AdminLayout } from '@/module/layout/AdminLayout';

import React from 'react';

interface AdminProps {
  users: UserType[];
  session: Session | null;
  children: ReactElement;
}

const AdminPage = (props: AdminProps) => {
  return props.children;
};

export const AdminPageLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

AdminPage.getLayout = AdminPageLayout;

export default AdminPage;

export async function getServerSideProps(context: any) {
  const users = await prisma.user.findMany();
  return {
    props: {
      session: await getServerSession(context.req, context.res, authOptions),
      users,
    },
  };
}
