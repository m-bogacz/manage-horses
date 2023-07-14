import React, { useEffect, useState } from 'react';
import { useAddRecordTab } from './useAddRecordTab';
import { AxiosResponse } from 'axios';
import { Tab, VariantTabType } from '@/utils/types/horse';
import { revalidate } from '@/apps/api/services/revalidate.services';

export const useSubmitFormHandler = (
  fn: (data: Tab) => Promise<AxiosResponse<any, any>>,
  horseName: string,
  initialData: VariantTabType
) => {
  const { data, isLoading, error, isSuccess, mutation, refetch } = useAddRecordTab(fn, initialData, horseName);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    refetch();
  }, [initialData, refetch]);

  const addDataFromTab = async (tab: Tab) => {
    setIsLoaded(true);
    try {
      await mutation.mutateAsync({ ...tab, name: horseName });
      await revalidate(`/horse/${name}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
    setIsLoaded(false);
  };

  return { data, isLoading, error, isSuccess, addDataFromTab, isLoaded };
};
