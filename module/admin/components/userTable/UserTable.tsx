import { TableContainer, Table, Thead, Tr, Th, Tbody } from '@chakra-ui/react';
import React from 'react';
import { Row } from './Row';
import { UserType } from '@/utils/types/user';
import { useRouter } from 'next/router';

interface UserTableProps {
  users: UserType[];
}

export const UserTable = ({ users }: UserTableProps) => {
  const router = useRouter();
  return (
    <TableContainer>
      <Table variant="unstyled" colorScheme="teal" size="sm">
        <Thead>
          <Tr>
            <Th maxW={50}>Name</Th>
            <Th maxW={50}>email</Th>
            <Th maxW={50}>activated</Th>
            <Th maxW={50}>role</Th>
            <Th maxW={50}>set active</Th>
            {router.pathname === '/admin/users' && <Th maxW={50}>set role</Th>}
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Row key={user.id} user={user} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
