import React from 'react';
import { AdminPageLayout } from '.';
import { prisma } from '@/lib/prisma';
import { GetStaticProps } from 'next';
import { Box, Flex } from '@chakra-ui/react';
import { UserType } from '@/utils/types/user';
import { UserTable } from '@/module/admin/components/userTable/UserTable';
import { getAllUsersServices } from '@/apps/api/modules/user/user.services';
import { useQuery } from '@tanstack/react-query';

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

export const getStaticProps: GetStaticProps<Partial<any>> = async () => {
  const users = await prisma.user.findMany({
    where: {
      activated: false,
    },
  });

  return {
    props: {
      users,
    },
  };
};

Activate.getLayout = AdminPageLayout;
