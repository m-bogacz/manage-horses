import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { VariantTabType } from '@/utils/types/horse';

export const fetchTab = async <T>(tabName: string, horseName: string) => {
  const result = await axios.get<T[]>(`/api/tab/${tabName}?name=${horseName}`);

  return result.data[0];
};

export const useFetchTab = <T extends VariantTabType>(initial: T, tabName: string, horseName: string) => {
  const { data, isLoading, error, isSuccess, refetch } = useQuery(
    [tabName, horseName],
    () => fetchTab<T>(tabName, horseName),
    {
      initialData: initial,
      enabled: false,
    }
  );

  return { data, isLoading, error, isSuccess, refetch };
};
