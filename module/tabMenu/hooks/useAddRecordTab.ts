import React from 'react';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { Tab, VariantTabType } from '@/utils/types';
import { useFetchTab } from './useFetchTab';

type Fn = (data: Tab & { name: string }) => Promise<AxiosResponse<any, any>>;

export const useAddRecordTab = <T extends VariantTabType>(
  addServices: Fn,
  initial: T,
  tabName: string,
  horseName: string
) => {
  const queryClient = useQueryClient();
  const { data, isLoading, error, isSuccess, refetch } = useFetchTab<T>(initial, tabName, horseName);

  const mutation = useMutation(addServices, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([tabName]);
    },
    onError: (error) => {
      console.error('Wystąpił błąd podczas dodawania obiektu:', error);
    },
  });

  return { mutation, data, isLoading, error, isSuccess, refetch };
};
