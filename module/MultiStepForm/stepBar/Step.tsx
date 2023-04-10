import { Box, Circle, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const Step = ({ step, active, label }: { step: number; active: number; label: string }) => {
  const isActive = step <= active;
  return (
    <Flex flexDir={'column'} align="center">
      <Circle size="40px" bg={isActive ? 'step.activeText' : 'step.100'} color={isActive ? 'step.active' : 'step.200'}>
        {step}
      </Circle>
      <Text>{label}</Text>
    </Flex>
  );
};
