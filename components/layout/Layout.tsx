import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { Sidebar } from '../sidebar/Sidebar';

export const Layout = ({ children }: { children: any }) => {
  return (
    <Flex>
      <Box
        alignContent={'center'}
        justifyContent="center"
        flex={{ base: 1, md: 0 }}
        minH="100vh"
        bg={useColorModeValue('gray.100', 'gray.900')}
      >
        <Sidebar />
      </Box>
      <Box as={'main'} flex={{ base: 0, md: 2 }}>
        {children}
      </Box>
    </Flex>
  );
};
