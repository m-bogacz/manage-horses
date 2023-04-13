import React from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { addObject } from '../services/services';

export const useAddHorse = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

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
