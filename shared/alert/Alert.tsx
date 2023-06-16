import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from '@chakra-ui/react';
import React from 'react';

interface AlertProps {
  type?: 'add' | 'remove' | 'update';
  dialogHeader: string;
  dialogBody: React.ReactNode;
  btnCancelContent?: string;
  btnAccteptContent?: string;
  isOpen: boolean;
  onClick: () => void;
  onClose: () => void;
}

export const Alert = ({
  type = 'remove',
  dialogHeader,
  dialogBody,
  btnCancelContent = 'Cancel',
  btnAccteptContent = 'Yes',
  isOpen,
  onClick,
  onClose,
}: AlertProps) => {
  const cancelRef = React.useRef<any>(null);

  const colorBtnSchema = type === 'remove' ? 'red' : type === 'add' ? 'green' : 'orange';

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {dialogHeader}
          </AlertDialogHeader>
          <AlertDialogBody>{dialogBody}</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              {btnCancelContent}
            </Button>
            <Button colorScheme={colorBtnSchema} onClick={onClick} ml={3}>
              {btnAccteptContent}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
