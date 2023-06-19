import React from 'react';
import { EditIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { ButtonPropsShared } from './types';

export const EditButton = ({ onClick, content = 'Edit' }: ButtonPropsShared) => {
  return (
    <Button onClick={onClick} leftIcon={<EditIcon />} size="md" colorScheme="teal" variant="solid">
      {content}
    </Button>
  );
};
