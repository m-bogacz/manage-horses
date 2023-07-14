import { Box, Flex } from '@chakra-ui/react';
import { ChildrenPageProps } from '@/utils/types';
import { AdminDashboard } from '../admin/dashboard/AdminDashboard';
import { useSession } from 'next-auth/react';
import { AccessDenied } from '@/shared/accessDenied/AccessDenied';

export const AdminLayout = ({ children }: ChildrenPageProps) => {
  const { data: session } = useSession();

  if (!session || session?.user.role !== 'admin') return <AccessDenied />;

  return (
    <Flex w={'100vw'} h={'100vh'}>
      <Box as="aside" w={{ base: '50px', md: 240 }}>
        <AdminDashboard />
      </Box>
      <Box as={'main'} flex={1}>
        {children}
      </Box>
    </Flex>
  );
};
