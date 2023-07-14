import { Divider, MenuItem } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import { ChakraNextLink } from '@/shared/chakraNextLink/ChakraNextLink';

interface LinkItemProps {
  name: string;
  href: string;
  icon: IconType;
  callback?: () => void | null;
  divider?: boolean;
}

export const UserMenuItem = ({ name, href, icon: Icon, callback, divider = false }: LinkItemProps) => {
  return (
    <ChakraNextLink href={`/${href}`}>
      {divider && <Divider />}
      <MenuItem icon={<Icon />} onClick={callback && callback}>
        {name}
      </MenuItem>
    </ChakraNextLink>
  );
};
