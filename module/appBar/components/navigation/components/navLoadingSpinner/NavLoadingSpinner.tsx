import { HStack, Spinner } from '@chakra-ui/react';
import React from 'react';

export const NavLoadingSpinner = () => {
  return (
    <HStack mr={10}>
      <Spinner />
    </HStack>
  );
};
