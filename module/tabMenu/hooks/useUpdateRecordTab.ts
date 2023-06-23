import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { Tab } from '@/utils/types';
import { revalidate, updateTabServices, deleteTabServices } from '@/apps/services/services';
import { fetchTab } from './useFetchTab';
import { useToast } from '@chakra-ui/react';

export const useUpdateRecordTab = (horseName: string, tabName: string, id: number) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const { refetch } = useQuery([tabName, horseName], async () => fetchTab(tabName, horseName));

  const mutationUpdateTabServices = useMutation(updateTabServices, {
    onSuccess: () => {
      queryClient.invalidateQueries([tabName]);
    },
    onError: (error) => {
      console.error('Wystąpił błąd podczas dodawania obiektu:', error);
    },
  });

  const mutationDeleteTabServices = useMutation(deleteTabServices, {
    onSuccess: () => {
      queryClient.invalidateQueries([tabName]);
    },
    onError: (error) => {
      console.error('Wystąpił błąd podczas dodawania obiektu:', error);
    },
  });

  const updateTab = async (tab: Tab) => {
    try {
      await mutationUpdateTabServices.mutateAsync({ tab, tabName, id });
      await revalidate(`/horse/${horseName}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const removeTab = async (id: number, onClose: () => void) => {
    try {
      await mutationDeleteTabServices.mutateAsync({ id, tabName });
      toast({
        title: `Tab ${tabName} has been successfully deleted.`,
        status: 'success',
        position: 'top',
      });
      await revalidate(`/horse/${horseName}`);
      refetch();
    } catch (error) {
      toast({
        title: `Failed to Delete Tab ${tabName}`,
        status: 'error',
        position: 'top',
      });
    } finally {
      onClose();
    }
  };

  return { updateTab, removeTab };
};
