import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { Tab } from '@/utils/types';
import { revalidate, updateTabServices } from '@/apps/services/services';
import { fetchTab } from './useFetchTab';

export const useUpdateRecordTab = (horseName: string, tabName: string, id: number) => {
  const queryClient = useQueryClient();

  const { refetch } = useQuery([tabName], async () => fetchTab(tabName, horseName));

  const mutation = useMutation(updateTabServices, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([tabName]);
    },
    onError: (error) => {
      console.error('Wystąpił błąd podczas dodawania obiektu:', error);
    },
  });

  const updateTab = async (tab: Tab) => {
    try {
      await mutation.mutateAsync({ tab, tabName, id });
      await revalidate(`/horse/${horseName}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return { updateTab };
};
