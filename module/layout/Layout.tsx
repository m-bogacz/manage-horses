import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { Sidebar } from '../sidebar/Sidebar';

export const Layout = ({ children }: { children: any }) => {
  return (
    <Flex h={'100vh'}>
      <Sidebar />

      <Box as={'main'} w={'100%'} flex={{ md: 1 }}>
        {children}
      </Box>
    </Flex>
  );
};
