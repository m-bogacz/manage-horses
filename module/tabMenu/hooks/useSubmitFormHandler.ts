import React, { useState } from 'react';
import { useAddRecordTab } from './useAddRecordTab';
import { AxiosResponse } from 'axios';
import { SectionNameType, Tab } from '@/utils/types';
import { revalidate } from '@/apps/services/services';

type Fn = (data: Tab & { name: string }) => Promise<AxiosResponse<any, any>>;

export const useSubmitFormHandler = (
  fn: (data: Tab) => Promise<AxiosResponse<any, any>>,
  name: string,
  initialData: Tab[],
  tabName: string
) => {
  const { data, isLoading, error, mutation, isSuccess, refetch } = useAddRecordTab(fn, initialData, tabName, name);
  const [isLoaded, setIsLoaded] = useState(false);

  const addDataFromTab = async (news: Tab) => {
    try {
      await mutation.mutateAsync({ ...news, name });
      setIsLoaded(true);
      await revalidate(`/horse/${name}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
    setIsLoaded(false);
  };

  return { data, isLoading, error, isSuccess, addDataFromTab, isLoaded };
};
