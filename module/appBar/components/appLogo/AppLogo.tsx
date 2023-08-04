import { ChakraNextLink } from '@/shared/chakraNextLink/ChakraNextLink';
import { ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

export const AppLogo = () => {
  return (
    <ListItem display={'flex'} alignItems={'center'} w={400}>
      <ChakraNextLink href="/horse" ml={5} bg="appbar.100" display={'flex'}>
        <Image priority src="/logo.svg" height={42} width={42} alt="Logo App" />
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Horses
        </Text>
      </ChakraNextLink>
    </ListItem>
  );
};
