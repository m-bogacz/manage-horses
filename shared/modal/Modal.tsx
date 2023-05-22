import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalProps,
} from '@chakra-ui/react';
import React from 'react';

interface ModalPropsUI {
  readonly children: React.ReactNode;
  readonly title: string;
  readonly buttons: React.ReactNode;
  readonly isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const Modal = ({ children, title, buttons, isOpen, onOpen, onClose, ...props }: ModalPropsUI & ModalProps) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>{buttons}</ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};
