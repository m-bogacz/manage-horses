import React from 'react';
import { Divider, Flex } from '@chakra-ui/react';
import { Navigation } from './components/nav/Nav';
import { AppLogo } from './components/appLogo/AppLogo';

export const AppBar = () => {
  return (
    <>
      <Flex align={'center'} p={1} bg="appbar.100">
        <AppLogo />
        <Navigation />
      </Flex>
      <Divider />
    </>
  );
};
