import React from 'react';
import { Tr, Td, Button } from '@chakra-ui/react';
import { useToggleUserActivation } from '../../activate/hooks/useToggleUserActivation';
import { UserType } from '@/utils/types/user';
import { useRouter } from 'next/router';

interface RowProps {
  user: UserType;
}

export const Row = ({ user }: RowProps) => {
  const router = useRouter();
  const { handleToggleUserActivation, loading } = useToggleUserActivation(user);

  return (
    <Tr>
      <Td maxWidth={30}>{user.name}</Td>
      <Td maxWidth={30}>{user.email}</Td>
      <Td maxWidth={30}>{String(user.activated)}</Td>
      <Td maxWidth={30}>{user.role}</Td>
      <Td maxWidth={30}>
        <Button isLoading={loading} onClick={handleToggleUserActivation}>
          {user.activated ? 'deactivate' : 'active'}
        </Button>
      </Td>
      {router.pathname === '/admin/users' && (
        <Td maxWidth={30}>
          <Button>set role</Button>
        </Td>
      )}
    </Tr>
  );
};
