import { HStack, Text } from '@chakra-ui/react';
import { FeatureProps } from './types';

export const Feature = ({ title, desc }: FeatureProps) => {
  return (
    <HStack p={1} alignItems="center">
      <Text fontSize="2xl" mr={1}>
        {title}:
      </Text>
      <Text fontSize="2xl" fontWeight={'medium'}>
        {desc}
      </Text>
    </HStack>
  );
};
