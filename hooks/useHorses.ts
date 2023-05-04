import { fetchHorses } from '@/apps/services/services';
import { useQuery } from '@tanstack/react-query';

export const useHorses = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['horses'],
    queryFn: fetchHorses,
  });

  return { data, isLoading, error };
};
