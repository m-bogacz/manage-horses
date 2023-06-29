import { MenuDivider, MenuItem } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

interface LinkItemProps {
  name: string;
  icon: IconType;
  callback?: () => void | null;
  divider?: boolean;
}

export const UserMenuItem = ({ name, icon: Icon, callback, divider = false }: LinkItemProps) => {
  return (
    <>
      {divider ? <MenuDivider /> : null}
      <MenuItem onClick={callback && callback} icon={<Icon />}>
        {name}
      </MenuItem>
    </>
  );
};
