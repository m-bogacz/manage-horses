import { ChakraNextLink } from '@/shared/chakraNextLink/ChakraNextLink';
import { Stack } from '@chakra-ui/react';
import React from 'react';

export const AuthenticationOptions = () => {
  return (
    <Stack justify={'flex-end'} direction={'row'} spacing={6} mr={5}>
      <ChakraNextLink fontWeight={400} variant={'link'} href={'/login'} color="MenuText">
        Sign In
      </ChakraNextLink>
      <ChakraNextLink href={'/register'}>Sign Up</ChakraNextLink>
    </Stack>
  );
};
