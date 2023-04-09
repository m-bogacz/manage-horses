import { Button, Flex, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export const AppBar = () => {
  return (
    <Link href={'/'}>
      <Flex h="20" alignItems="center" mx="8" gap={2}>
        <Image priority src="/logo.svg" height={42} width={42} alt="Logo App" />
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Horses
        </Text>
      </Flex>
    </Link>
  );
};
