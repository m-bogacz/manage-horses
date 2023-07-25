import React from 'react';
import { ChakraNextLink } from '@/shared/chakraNextLink/ChakraNextLink';
import { FlexProps, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface NavItemProps extends FlexProps {
  icon: IconType;

  href: string;
}

export const MobileAdminSidebarItem = ({ icon, href }: NavItemProps) => {
  return (
    <ChakraNextLink href={`${href}`} _focus={{ boxShadow: '#0F8378' }}>
      <Icon
        fontSize="16"
        _groupHover={{
          color: 'white',
        }}
        as={icon}
      />
    </ChakraNextLink>
  );
};
