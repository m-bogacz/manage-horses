import { ChakraNextLink } from '@/shared/chakraNextLink/ChakraNextLink';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

export const AppLogo = () => {
  return (
    <ChakraNextLink href="/" ml={5}>
      <Flex>
        <Image priority src="/logo.svg" height={42} width={42} alt="Logo App" />
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Horses
        </Text>
      </Flex>
    </ChakraNextLink>
  );
};
