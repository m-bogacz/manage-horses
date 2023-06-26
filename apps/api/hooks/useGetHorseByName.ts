import { useQuery } from '@tanstack/react-query';
import { getHorse } from '../services/horse.services';

export const useGetHorseByName = (name: string, initial: any) => {
  return useQuery(['horse'], () => getHorse(name), { initialData: initial });
};
