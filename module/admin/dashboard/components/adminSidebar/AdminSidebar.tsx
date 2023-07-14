import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { MobileAdminSidebar } from './components/mobileSidebar/MobileAdminSidebar';
import { AdminSidebarContent } from './components/sidebar/AdminSidebarContent';

export const AdminSidebar = () => {
  return (
    <Flex
      position={'fixed'}
      bg="gray.900"
      borderRight="1px"
      borderRightColor="gray.200"
      h="calc(100vh - 60px)"
      backgroundColor={{ base: 'white', md: 'white' }}
      flexDir={'column'}
      maxW={240}
    >
      <MobileAdminSidebar display={{ base: 'flex', md: 'none' }} />
      <Box display={{ base: 'none', md: 'flex' }}>
        <AdminSidebarContent />
      </Box>
    </Flex>
  );
};
