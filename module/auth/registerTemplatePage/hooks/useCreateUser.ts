import React from 'react';
import { createUserServices } from '@/apps/api/modules/user/user.services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export const useCreateUser = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation(createUserServices, {
    onSuccess: (data) => {
      queryClient.invalidateQueries();
      router.push('/login');
    },
    onError: (error) => {
      console.error('Wystąpił błąd podczas dodawania obiektu:', error);
    },
  });

  return { create: mutation.mutateAsync, loading: mutation.isLoading };
};
