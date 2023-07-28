import React from 'react';
import { Box } from '@chakra-ui/react';
import { UserType } from '@/utils/types/user';
import { UserTable } from '@/module/admin/components/userTable/UserTable';
import { getAllUsersServices } from '@/apps/api/modules/user/user.services';
import { useQuery } from '@tanstack/react-query';
import { AdminPageLayout } from '@/module/layout/AdminLayout';
import { findDeactivateUsers } from '@/apps/api/modules/user/user.utils';

interface AdminUserProps {
  users: UserType[];
}

export default function Activate({ users }: AdminUserProps) {
  const { data } = useQuery(['userData', users], () => getAllUsersServices(), {
    initialData: users,
  });

  const filteredUsers = [...data.filter((user) => !user.activated)];

  return (
    <Box w={'100%'}>
      <UserTable users={filteredUsers} />
    </Box>
  );
}

export const getStaticProps = async () => {
  const users = await findDeactivateUsers();

  return {
    props: {
      users: users,
    },
  };
};

Activate.getLayout = AdminPageLayout;
