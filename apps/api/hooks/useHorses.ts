import { useQuery } from '@tanstack/react-query';
import { fetchHorses } from '../modules/horse/horse.services';

export const useHorses = (queryName: string, queryAge?: string) => {
  return useQuery({
    queryKey: ['horses', queryName, queryAge],
    queryFn: () => fetchHorses(queryName, queryAge),
    enabled: true,
  });
};
