import React from 'react';
import { MenuList, useColorModeValue } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import { FiHome, FiSettings, FiLogOut } from 'react-icons/fi';
import { UserMenuItem } from './components/userMenuItem.tsx/UserMenuItem';

const logout = () => {
  signOut();
};

const LinkItems = [
  { name: 'Profile', icon: FiHome, callback: undefined, divider: false },
  { name: 'Settings', icon: FiSettings, callback: undefined, divider: false },
  { name: 'Sign out', icon: FiLogOut, callback: logout, divider: true },
];

export const UserMenuList = () => {
  return (
    <MenuList bg={useColorModeValue('white', 'gray.900')} borderColor={useColorModeValue('gray.200', 'gray.700')}>
      {LinkItems.map((item) => {
        return <UserMenuItem key={item.name} name={item.name} icon={item.icon} callback={item.callback} />;
      })}
    </MenuList>
  );
};
