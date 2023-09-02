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
  readonly contentButton?: string;
  readonly showButton?: boolean;
  readonly onSubmit?: (data: any) => Promise<void>;
  as?: React.ElementType;
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
  as = 'section',
  onSubmit,
  showButton = false,
  ...props
}: ModalPropsUI & ModalProps) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} {...props}>
      <ModalOverlay />
      <ModalContent as={as} onSubmit={onSubmit}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          {!showButton || buttons ? (
            buttons
          ) : (
            <Buttons onClose={onClose} onClick={onClick} contentButton={contentButton} />
          )}
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
