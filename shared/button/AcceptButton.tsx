import React from 'react';
import { ButtonPropsShared } from './types';
import { Button } from '@chakra-ui/react';

export const AcceptButton = ({ onClick, content = 'Edit' }: ButtonPropsShared) => {
  return (
    <Button onClick={onClick} size="md" colorScheme="blue" variant="solid">
      {content}
    </Button>
  );
};
