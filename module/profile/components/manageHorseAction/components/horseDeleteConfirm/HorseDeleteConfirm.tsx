import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useHorseContext } from '@/apps/context/horseContext/HorseContext';
import { Alert } from '@/shared/alert/Alert';
import { useDisclosure, Button, Text, useToast, Flex } from '@chakra-ui/react';

import { useRouter } from 'next/router';
import React from 'react';
import { deleteHorse } from '@/apps/api/services/horse.services';

export const HorseDeleteConfirm = () => {
  const toast = useToast();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { name } = useHorseContext();
  const mutation = useMutation(deleteHorse, {
    onSuccess: (data) => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error('Wystąpił błąd podczas dodawania obiektu:', error);
    },
  });

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

      <Alert
        dialogHeader="Delete Horse"
        dialogBody={
          <Flex gap={1}>
            <Text>Are you sure you want to delete the horse</Text>
            <Text as={'b'}>{`${name} ?`}</Text>
          </Flex>
        }
        isOpen={isOpen}
        onClick={() => remove(name)}
        onClose={onClose}
      />
    </>
  );
};
