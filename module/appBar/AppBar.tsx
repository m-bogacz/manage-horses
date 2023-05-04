import React from 'react';
import { ChakraNextLink } from '@/shared/chakraNextLink/ChakraNextLink';
import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

export const AppBar = () => {
  return (
    <Flex h="20" alignItems="center" mx="8" gap={2}>
      <ChakraNextLink href="/">
        <Flex>
          <Image priority src="/logo.svg" height={42} width={42} alt="Logo App" />
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Horses
          </Text>
        </Flex>
      </ChakraNextLink>
    </Flex>
  );
};
