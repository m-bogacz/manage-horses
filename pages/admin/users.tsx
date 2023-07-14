import React from 'react';
import { AdminPageLayout } from '.';
import { UserType } from '@/utils/types/user';
import { findUsers } from '@/apps/api/modules/user/user.utils';
import { getAllUsersServices } from '@/apps/api/modules/user/user.services';
import { useQuery } from '@tanstack/react-query';
import { UserTable } from '@/module/admin/components/userTable/UserTable';
import { Box } from '@chakra-ui/react';

interface AdminUserProps {
  users: UserType[];
}

export default function Users({ users }: AdminUserProps) {
  const { data } = useQuery(['userData', users], () => getAllUsersServices(), {
    initialData: users,
  });

  return (
    <Box>
      <UserTable users={data} />
    </Box>
  );
}

export const getStaticProps = async () => {
  const users = await findUsers();
  return {
    props: {
      users,
    },
  };
};

Users.getLayout = AdminPageLayout;
