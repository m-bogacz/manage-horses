import React from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useToast } from '@chakra-ui/react';
import { updateHorse } from '@/apps/api/modules/horse/horse.services';

export const useMutationsUpdateHorse = () => {
  const queryClient = useQueryClient();

  const toast = useToast();

  const mutation = useMutation(updateHorse, {
    onSuccess: async (data) => {
      queryClient.invalidateQueries(['horse']);
      toast({
        title: data.data.message,
        status: 'success',
        position: 'top',
      });
    },
    onError: (error) => {
      toast({
        title: 'Failed to update!! Try again later please!',
        status: 'error',
        position: 'top',
      });
    },
  });

  return { update: mutation.mutateAsync, loading: mutation.isLoading };
};
