import React from 'react';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { Tab } from '@/utils/types';

type Fn = (data: Tab & { name: string }) => Promise<AxiosResponse<any, any>>;

export const fetchTab = async (tabName: string, horseName: string) => {
  const result = await axios.get<Tab[]>(`/api/tab/${tabName}?name=${horseName}`);

  return result.data;
};

export const useRemoveRecordTab = (removeServices: Fn, tabName: string, horseName: string) => {
  const queryClient = useQueryClient();

  const { data, isLoading, error, isSuccess, refetch } = useQuery([tabName], async () => fetchTab(tabName, horseName), {
    enabled: false,
  });

  const mutation = useMutation(removeServices, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([tabName]);
    },
    onError: (error) => {
      console.error('Wystąpił błąd podczas usuwania obiektu:', error);
    },
  });

  return { mutation, data, isLoading, error, isSuccess, refetch };
};
