import { HorseEntity } from '@/utils/types';
import { useQuery } from '@tanstack/react-query';

type FetchHorsesEntity = { horses: HorseEntity[] };

export const fetchHorses = async (): Promise<FetchHorsesEntity> =>
  await fetch('http://localhost:3000/api/horses').then((res) => res.json());

export const useHorses = () => {
  return useQuery({
    queryKey: ['horses'],
    queryFn: fetchHorses,
  });
};
