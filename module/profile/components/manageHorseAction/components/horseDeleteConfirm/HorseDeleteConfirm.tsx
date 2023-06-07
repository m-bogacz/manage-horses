import { useHorseContext } from '@/apps/context/HorseContext';

import {
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Text,
  HStack,
  useToast,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';

export const deleteHorse = (name: string) =>
  axios.delete('/api/horse', {
    data: {
      name,
    },
  });

export const HorseDeleteConfirm = () => {
  const toast = useToast();
  const router = useRouter();
  const queryClient = useQueryClient();

  const { name } = useHorseContext();
  const mutation = useMutation(deleteHorse, {
    onSuccess: (data) => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error('Wystąpił błąd podczas dodawania obiektu:', error);
    },
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<any>();

  const remove = async (removeName: string) => {
    try {
      await mutation.mutateAsync(removeName);
      onClose();
      router.push('/');
      toast({
        title: `Horse ${name} has been successfully deleted.`,
        status: 'success',
        position: 'top',
      });
    } catch (error) {
      toast({
        title: `Failed to delete the horse.`,
        status: 'error',
        position: 'top',
      });
    }
  };

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Delete horse
      </Button>

      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete horse
            </AlertDialogHeader>

            <AlertDialogBody>
              <HStack>
                <Text>Are you sure you want to delete the horse</Text>
                <Text as={'b'}>{`${name} ?`}</Text>
              </HStack>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={() => remove(name)} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
