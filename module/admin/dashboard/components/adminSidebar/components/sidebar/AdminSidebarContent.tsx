import React, { ReactNode } from 'react';
import { useColorModeValue, Box, FlexProps, IconButton, Flex } from '@chakra-ui/react';
import { FiHome, FiTrendingUp } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { AdminSidebarItem } from './AdminSideBarItem';
import { LinkItems } from '@/module/admin/utils';

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
      {LinkItems.map((link) => (
        <AdminSidebarItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </AdminSidebarItem>
      ))}
    </Box>
  );
};
