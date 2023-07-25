import React from 'react';
import { adminRouteLinks } from '@/module/admin/utils';
import { FlexProps, Flex, useColorModeValue } from '@chakra-ui/react';
import { MobileAdminSidebarItem } from './MobileAdminSidebarItem';

export const MobileAdminSidebar = ({ ...rest }: FlexProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="100vh"
      gap={10}
      alignItems="center"
      flexDir={'column'}
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      {adminRouteLinks.map((link) => (
        <MobileAdminSidebarItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </MobileAdminSidebarItem>
      ))}
    </Flex>
  );
};
