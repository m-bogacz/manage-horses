import React from 'react';
import { createUserServices } from '@/apps/api/modules/user/user.services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';

export const useCreateUser = () => {
  const toast = useToast();
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation(createUserServices, {
    onSuccess: (data) => {
      queryClient.invalidateQueries();
      router.push('/login');
      toast({
        title: `User has been created successfully.`,
        status: 'success',
        position: 'top',
      });
    },
    onError: (error) => {
      toast({
        title: `Failed to create user.`,
        status: 'error',
        position: 'top',
      });
      console.error('Wystąpił błąd podczas dodawania obiektu:', error);
    },
  });

  return { create: mutation.mutateAsync, loading: mutation.isLoading };
};
