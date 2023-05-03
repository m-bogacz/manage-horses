import React from 'react';
import { VStack, Skeleton } from '@chakra-ui/react';

export const LoadingSkeleton = ({ count = 1 }: { count?: number }) => {
  const numbers = Array.from({ length: count }, (_, index) => index);
  return (
    <VStack spacing={4} mt={1}>
      {numbers.map((num) => {
        return <Skeleton key={num} height="40px" width="100%" fitContent />;
      })}
    </VStack>
  );
};
