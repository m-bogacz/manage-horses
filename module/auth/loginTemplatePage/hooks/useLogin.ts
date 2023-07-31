import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Inputs } from '../utils/types';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const useLogin = () => {
  const router = useRouter();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const login = async (data: Inputs) => {
    setLoading(true);
    try {
      const result = await signIn('credentials', {
        name: data.name,
        password: data.password,
      });
      if (!result?.ok) {
        toast({
          title: `Login failed. Please check your username and password and try again.`,
          status: 'error',
          position: 'top',
        });
      } else {
        router.push('/horse');
      }
    } catch (error) {
      console.error('Wystąpił błąd podczas dodawania obiektu:', error);
    }
    setLoading(false);
  };

  return { login, loading };
};
