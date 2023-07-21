import { ChakraNextLink } from '@/shared/chakraNextLink/ChakraNextLink';
import { Stack, Text } from '@chakra-ui/react';
import React from 'react';

export const AuthenticationOptions = () => {
  return (
    <Stack align={'center'} justifyItems={'center'} direction={'row'} spacing={6}>
      <ChakraNextLink fontWeight={400} variant={'link'} href={'/login'} color="MenuText">
        Sign In
      </ChakraNextLink>
      <ChakraNextLink border={'1px solid grey'} p={1} href={'/register'}>
        <Text _hover={{ transform: 'translateY(2px)', transition: 'transform ease .2s' }}>Sign Up</Text>
      </ChakraNextLink>
    </Stack>
  );
};
