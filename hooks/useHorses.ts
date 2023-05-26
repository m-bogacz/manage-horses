import { fetchHorses } from '@/apps/services/services';
import { useQuery } from '@tanstack/react-query';

export const useHorses = (queryName: string, queryAge?: string) => {
  return useQuery({
    queryKey: ['horses', queryName, queryAge],
    queryFn: () => fetchHorses(queryName, queryAge),
    enabled: true,
  });
};
