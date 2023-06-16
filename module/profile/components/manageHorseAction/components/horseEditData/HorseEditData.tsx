import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { EditButton } from '@/shared/button/EditButton';
import { Modal } from '@/shared/modal/Modal';

export const HorseEditData = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal title="Edit horse" onClose={onClose} onOpen={onOpen} isOpen={isOpen}>
        <div> form</div>
      </Modal>
      <EditButton onClick={onOpen} />
    </>
  );
};
