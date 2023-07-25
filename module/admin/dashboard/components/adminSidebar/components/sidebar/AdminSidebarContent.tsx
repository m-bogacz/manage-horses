import React from 'react';
import { useColorModeValue, Box } from '@chakra-ui/react';
import { AdminSidebarItem } from './AdminSideBarItem';
import { adminRouteLinks } from '@/module/admin/utils';

export const AdminSidebarContent = () => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={240}
      pos="fixed"
      h="full"
    >
      {adminRouteLinks.map((link) => (
        <AdminSidebarItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </AdminSidebarItem>
      ))}
    </Box>
  );
};
