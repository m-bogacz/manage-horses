import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type horse = {
  name: string;
  profileImageUrl: string;
};

interface SideBarListProps {
  data: horse[];
}

export const fetchHorses = async (): Promise<SideBarListProps> => await axios.get('/api/horses');

export const useHorses = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['horses'],
    queryFn: fetchHorses,
  });

  return { data, isLoading, error };
};
