import { ChakraNextLink } from '@/shared/chakraNextLink/ChakraNextLink';
import { HStack, Text } from '@chakra-ui/react';
import { FeatureProps } from './types';

export const FeatureLink = ({ title, desc, variant = 'medium' }: FeatureProps) => {
  const size = variant === 'medium' ? '2xl' : variant === 'small' ? 'xl' : '4xl';
  return (
    <HStack p={1} alignItems="center">
      <Text fontSize={size} mr={1} fontWeight={'normal'}>
        {title}:
      </Text>
      <ChakraNextLink href={`/horse/${desc}`} fontSize={size} fontWeight={'medium'}>
        {desc}
      </ChakraNextLink>
    </HStack>
  );
};
