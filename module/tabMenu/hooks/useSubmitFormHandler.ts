import React, { useEffect, useState } from 'react';
import { useAddRecordTab } from './useAddRecordTab';
import { AxiosResponse } from 'axios';
import { Tab, VariantTabType } from '@/utils/types';
import { revalidate } from '@/apps/services/services';

export const useSubmitFormHandler = (
  fn: (data: Tab) => Promise<AxiosResponse<any, any>>,
  name: string,
  initialData: VariantTabType,
  tabNameType: string
) => {
  const { data, isLoading, error, isSuccess, mutation, refetch } = useAddRecordTab(fn, initialData, tabNameType, name);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    refetch();
  }, [initialData, refetch]);

  const addDataFromTab = async (tab: Tab) => {
    setIsLoaded(true);
    try {
      await mutation.mutateAsync({ ...tab, name });
      await revalidate(`/horse/${name}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
    setIsLoaded(false);
  };

  return { data, isLoading, error, isSuccess, addDataFromTab, isLoaded };
};
