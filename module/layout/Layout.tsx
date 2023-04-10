import { HOME_PAGE_PATH } from '@/apps/routes';
import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Sidebar } from '../sidebar/Sidebar';

export const Layout = ({ children }: { children: any }) => {
  const { pathname } = useRouter();

  const isHomePage = pathname === HOME_PAGE_PATH;
  return (
    <Flex h={'100vh'}>
      <Box display={{ base: isHomePage ? 'flex' : 'none', md: 'none', lg: 'flex' }}>
        <Sidebar />
      </Box>
      <Box as={'main'} w={'100%'} flex={{ md: 2 }}>
        {children}
      </Box>
    </Flex>
  );
};
