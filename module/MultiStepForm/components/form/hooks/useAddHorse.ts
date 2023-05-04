import React from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { addHorse } from '@/apps/services/services';

export const useAddHorse = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(addHorse, {
    onSuccess: (data) => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error('Wystąpił błąd podczas dodawania obiektu:', error);
    },
  });

  return { mutate: mutation.mutateAsync };
};
