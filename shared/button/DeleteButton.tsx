import React from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { ButtonPropsShared } from './types';

export const RemoveButton = ({ onClick, content = 'remove' }: ButtonPropsShared) => {
  return (
    <Button onClick={onClick} leftIcon={<DeleteIcon />} size="md" colorScheme="red" variant="solid">
      {content}
    </Button>
  );
};
