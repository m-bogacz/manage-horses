import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Inputs } from '../utils/types';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const login = async (data: Inputs) => {
    setLoading(true);
    try {
      await signIn('credentials', {
        name: data.name,
        password: data.password,
        callbackUrl: '/horse',
      });
    } catch (error) {
      console.error('Login failed. Please check your username and password and try again.');
    }
    setLoading(false);
  };

  return { login, loading };
};
