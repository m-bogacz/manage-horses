import { ReactNode } from 'react';
import { HOME_PAGE_PATH, HORSE_PAGE_PATH } from '@/apps/routes';
import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Sidebar } from '../sidebar/Sidebar';
import { ChildrenPageProps } from '@/utils/types/page';

export const Layout = ({ children }: ChildrenPageProps) => {
  const { pathname } = useRouter();

  const isHomePage = pathname === HOME_PAGE_PATH || pathname === HORSE_PAGE_PATH;
  return (
    <Flex>
      <Box as="aside" width={240} display={{ base: isHomePage ? 'flex' : 'none', lg: 'flex' }}>
        <Sidebar />
      </Box>
      <Box as={'main'} flex={1}>
        {children}
      </Box>
    </Flex>
  );
};
