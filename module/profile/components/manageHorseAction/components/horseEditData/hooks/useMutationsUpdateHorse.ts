import React from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { updateHorse } from '@/apps/services/services';
import { useToast } from '@chakra-ui/react';

export const useMutationsUpdateHorse = (name: string, initialData: any) => {
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
