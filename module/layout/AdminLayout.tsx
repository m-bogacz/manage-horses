import { Box, Flex } from '@chakra-ui/react';
import { AdminDashboard } from '../admin/dashboard/AdminDashboard';
import { ChildrenPageProps } from '@/utils/types/page';
import { ReactElement, Suspense } from 'react';
import { useSession } from 'next-auth/react';
import { AccessDenied } from '@/shared/accessDenied/AccessDenied';

export const AdminLayout = ({ children }: ChildrenPageProps) => {
  const { data: session, status } = useSession();

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

export const AdminPageLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
