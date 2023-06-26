import { fetchPhotos } from '@/apps/api/services/photos.services';
import { useQuery } from '@tanstack/react-query';

export const usePhotos = (horseName: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['photos', horseName],
    queryFn: () => fetchPhotos(horseName),
  });

  return { data, isLoading, error };
};
