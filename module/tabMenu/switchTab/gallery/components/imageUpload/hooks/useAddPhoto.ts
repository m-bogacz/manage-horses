import { addPhoto } from '@/apps/api/services/photos.services';
import { useQueryClient, useMutation } from '@tanstack/react-query';

export const useAddPhoto = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(addPhoto, {
    onSuccess: (data) => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error('Wystąpił błąd podczas dodawania obiektu:', error);
    },
  });

  return { mutation };
};
