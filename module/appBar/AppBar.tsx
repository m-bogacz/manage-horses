import React from 'react';
import { Divider, Flex, List, ListItem, OrderedList } from '@chakra-ui/react';
import { Navigation } from './components/navigation/Navigation';
import { AppLogo } from './components/appLogo/AppLogo';

export const AppBar = () => {
  return (
    <List display={'flex'} p={1} bg="appbar.100">
      <AppLogo />
      <Navigation />
    </List>
  );
};
