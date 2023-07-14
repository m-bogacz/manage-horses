import { useQueryClient, useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { Tab, VariantTabType } from '@/utils/types/horse';
import { useFetchTab } from './useFetchTab';
import { revalidate } from '@/apps/api/services/revalidate.services';

type Fn = (data: Tab & { name: string }) => Promise<AxiosResponse<any, any>>;

export const useAddRecordTab = <T extends VariantTabType>(addServices: Fn, initial: T, horseName: string) => {
  const queryClient = useQueryClient();
  const { data, isLoading, error, isSuccess, refetch } = useFetchTab<T>(initial, initial.type, horseName);

  const mutation = useMutation(addServices, {
    onSuccess: async (data) => {
      queryClient.invalidateQueries([initial.type]);
      await revalidate(`/horse/${horseName}`);
    },
    onError: (error) => {
      console.error('Wystąpił błąd podczas dodawania obiektu:', error);
    },
  });

  return { mutation, data, isLoading, error, isSuccess, refetch };
};
