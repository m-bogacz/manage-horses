import { GenderType, HorseData } from '@/utils/types';
import { api_client } from '../api_client';
import { SideBarListHorseEntity } from './types';

export const addHorse = (newHorse: any) => api_client.post('/api/horse', newHorse);

export const updateHorse = (newHorse: any) => api_client.put('/api/horse', newHorse);

export const getHorse = async (name: string) => {
  const result = await api_client.get<HorseData>(`/api/horse?name=${name}`);
  return result.data;
};

export const deleteHorse = (name: string) => api_client.delete('/api/horse', { data: { name } });

export const fetchHorses = async (queryName: string, queryAge?: string) => {
  const url = queryAge ? `/api/search?age=${queryAge}` : `/api/search?name=${queryName}`;
  const res = await api_client.get<SideBarListHorseEntity>(url);
  return res.data;
};

export const fetchHorsesByGender = async (gender: GenderType) => {
  const horses = await api_client.get<{ name: string }[]>(`/api/filter/gender?gender=${gender}`);
  return horses.data;
};
