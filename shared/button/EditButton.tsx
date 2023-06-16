import { EditIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';

export const EditButton = ({ onClick, content = 'Edit' }: { onClick: () => void; content?: string }) => {
  return (
    <Button onClick={onClick} leftIcon={<EditIcon />} size="md" colorScheme="teal" variant="solid">
      {content}
    </Button>
  );
};
