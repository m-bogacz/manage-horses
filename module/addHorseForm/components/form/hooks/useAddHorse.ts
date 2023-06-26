import { useQueryClient, useMutation } from '@tanstack/react-query';
import { addHorse } from '@/apps/api/services/horse.services';

export const useAddHorse = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(addHorse, {
    onSuccess: (data) => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error('Wystąpił błąd podczas dodawania obiektu:', error);
    },
  });

  return { mutate: mutation.mutateAsync };
};
