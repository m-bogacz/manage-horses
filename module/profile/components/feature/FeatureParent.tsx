import React from 'react';
import { FeatureParentProps } from './types';
import { Box, Flex } from '@chakra-ui/react';
import { FeatureLink } from './FeatureLink';

export const FeatureParent = ({ title, parent }: FeatureParentProps) => {
  return (
    <Box>
      <FeatureLink title={title} desc={parent?.name} />
      <Flex flexDir={'column'} ml={5}>
        <FeatureLink title="Grand mother" variant={'small'} desc={parent?.motherName} />
        <FeatureLink title="Grand father" variant={'small'} desc={parent?.fatherName} />
      </Flex>
    </Box>
  );
};
