import { Spinner, Stack } from '@chakra-ui/react';
import React from 'react';

export const NavLoadingSpinner = () => {
  return (
    <Stack p={1} mb={1}>
      <Spinner />
    </Stack>
  );
};
