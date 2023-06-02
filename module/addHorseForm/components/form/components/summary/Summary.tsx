import React from 'react';
import { CircleIcon } from '@/assets/icons/CircleIcon';
import { Flex, Text } from '@chakra-ui/react';

export const Summary = () => {
  return (
    <Flex flexDir={'column'} align="center" mt={10}>
      <CircleIcon />
      <Text fontSize={'2xl'} fontWeight="semibold" mt={10}>
        Added horse succesfully
      </Text>
    </Flex>
  );
};
