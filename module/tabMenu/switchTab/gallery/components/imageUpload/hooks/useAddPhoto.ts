import React from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { addPhoto } from '@/apps/services/services';

export const useAddPhoto = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(addPhoto, {
    onSuccess: (data) => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error('Wystąpił błąd podczas dodawania obiektu:', error);
    },
  });

  return { mutation };
};
