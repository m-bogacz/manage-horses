import React, { useEffect, useState } from 'react';
import { useAddRecordTab } from './useAddRecordTab';
import { AxiosResponse } from 'axios';
import { Tab } from '@/utils/types';
import { revalidate } from '@/apps/services/services';

export const useSubmitFormHandler = (
  fn: (data: Tab) => Promise<AxiosResponse<any, any>>,
  name: string,
  initialData: Tab[],
  tabName: string
) => {
  const { data, isLoading, error, mutation, isSuccess, refetch } = useAddRecordTab(fn, initialData, tabName, name);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    refetch();
  }, [initialData, refetch]);

  const addDataFromTab = async (news: Tab) => {
    setIsLoaded(true);
    try {
      await mutation.mutateAsync({ ...news, name });
      await revalidate(`/horse/${name}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
    setIsLoaded(false);
  };

  return { data, isLoading, error, isSuccess, addDataFromTab, isLoaded };
};
