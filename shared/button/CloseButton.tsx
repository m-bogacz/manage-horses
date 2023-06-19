import React from 'react';
import { ButtonPropsShared } from './types';
import { Button } from '@chakra-ui/react';

export const CloseButton = ({ onClick, content = 'Cancel' }: ButtonPropsShared) => {
  return (
    <Button size={'md'} onClick={onClick} colorScheme="gray" variant="solid" minW={'65px'}>
      {content}
    </Button>
  );
};
