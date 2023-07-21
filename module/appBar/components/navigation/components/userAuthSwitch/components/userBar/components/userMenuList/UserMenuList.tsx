import React from 'react';
import { MenuList, useColorModeValue } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import { FiHome, FiSettings, FiLogOut, FiPocket } from 'react-icons/fi';
import { UserMenuItem } from './components/userMenuItem.tsx/UserMenuItem';
import { useCheckAdmin } from '@/hooks/useCheckAdmin';

const logout = () => {
  signOut();
};

const LinkItems = [
  { name: 'Profile', href: 'profile', icon: FiHome, callback: undefined, divider: false },
  { name: 'Settings', href: 'settings', icon: FiSettings, callback: undefined, divider: false },
  { name: 'Admin dashboard', href: 'admin', icon: FiPocket, callback: undefined, divider: false },
  { name: 'Sign out', href: 'login', icon: FiLogOut, callback: logout, divider: true },
];

export const UserMenuList = () => {
  const isAdmin = useCheckAdmin();

  return (
    <MenuList bg={useColorModeValue('white', 'gray.900')} borderColor={useColorModeValue('gray.200', 'gray.700')}>
      {LinkItems.map((item) => {
        if (!isAdmin && item.href === 'admin') {
          return null;
        }
        return (
          <UserMenuItem
            key={item.name}
            name={item.name}
            href={item.href}
            icon={item.icon}
            callback={item.callback}
            divider={item.divider}
          />
        );
      })}
    </MenuList>
  );
};