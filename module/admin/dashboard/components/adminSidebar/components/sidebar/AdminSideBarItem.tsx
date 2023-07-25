import { ChakraNextLink } from '@/shared/chakraNextLink/ChakraNextLink';
import { FlexProps, Flex, Icon } from '@chakra-ui/react';

import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
  href: string;
}

export const AdminSidebarItem = ({ icon, children, href }: NavItemProps) => {
  return (
    <ChakraNextLink href={`${href}`} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </ChakraNextLink>
  );
};
