import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalProps,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import React from 'react';

interface ModalPropsUI {
  readonly children: React.ReactNode;
  readonly title: string;
  readonly buttons?: React.ReactNode;
  readonly isOpen: boolean;
  contentButton?: string;

  onOpen: () => void;
  onClose: () => void;
  onClick?: () => void;
}

export const Modal = ({
  children,
  onClick,
  title,
  buttons,
  isOpen,
  onOpen,
  onClose,
  contentButton,
  ...props
}: ModalPropsUI & ModalProps) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          {buttons ? buttons : <Buttons onClose={onClose} onClick={onClick} contentButton={contentButton} />}
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export interface ButtonsProps {
  onClose: () => void;
  onClick?: () => void;
  contentButton?: string;
}

const Buttons = ({ onClose, onClick, contentButton = 'save' }: ButtonsProps) => (
  <ButtonGroup>
    <Button colorScheme="gray" mr={3} onClick={onClose}>
      Close
    </Button>
    <Button colorScheme={'cyan'} onClick={onClick}>
      {contentButton}
    </Button>
  </ButtonGroup>
);
