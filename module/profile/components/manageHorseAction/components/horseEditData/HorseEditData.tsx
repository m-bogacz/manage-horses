import { Modal } from '@/shared/modal/Modal';
import { EditIcon } from '@chakra-ui/icons';
import { Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';

export const HorseEditData = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal title="Edit horse" onClose={onClose} onOpen={onOpen} isOpen={isOpen}>
        <div> form</div>
      </Modal>
      <Button onClick={onOpen} leftIcon={<EditIcon />} size="md" colorScheme="teal" variant="solid">
        Edit
      </Button>
    </>
  );
};
