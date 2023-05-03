import React from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { addObject } from '../services/services';

export const useAddHorse = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(addObject, {
    onSuccess: (data) => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error('Wystąpił błąd podczas dodawania obiektu:', error);
    },
  });

  return { mutation };
};
