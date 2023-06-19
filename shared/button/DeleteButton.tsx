import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';

export const RemoveButton = ({ onClick, content = 'remove' }: { onClick: () => void; content?: string }) => {
  return (
    <Button onClick={onClick} leftIcon={<DeleteIcon />} size="md" colorScheme="red" variant="solid">
      {content}
    </Button>
  );
};
