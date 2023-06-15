import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { Tab } from '@/utils/types';

export const fetchTab = async (tabName: string, horseName: string) => {
  const result = await axios.get<Tab[]>(`/api/tab/${tabName}?name=${horseName}`);

  return result.data;
};

export const useFetchTab = (initial: Tab[] = [], tabName: string, horseName: string) => {
  const { data, isLoading, error, isSuccess, refetch } = useQuery([tabName], async () => fetchTab(tabName, horseName), {
    initialData: initial,
    enabled: false,
  });

  return { data, isLoading, error, isSuccess, refetch };
};
