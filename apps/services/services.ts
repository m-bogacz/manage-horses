import axios from 'axios';
import { HorseData, SlideEntity, Tab, GenderType } from '@/utils/types';
import { AddPhotoEntity } from './types';

export const revalidate = (path: string) => {
  return axios.post(`/api/revalidate?secret=1234567`, { path });
};

export const addHorse = (newHorse: any) => axios.post('/api/horse', newHorse);
export const updateHorse = (newHorse: any) => axios.put('/api/horse', newHorse);

export const getHorse = async (name: string) => {
  const result = await axios.get<HorseData>(`/api/horse?name=${name}`);
  return result.data;
};

export const deleteHorse = (name: string) => axios.delete('/api/horse', { data: { name } });

export const fetchHorses = async (queryName: string, queryAge?: string) => {
  const url = queryAge ? `/api/search?age=${queryAge}` : `/api/search?name=${queryName}`;
  const res = await axios.get(url);
  return res.data;
};

export const addNewsServices = (data: Tab) => axios.post('/api/tab/news', data);

export const updateTabServices = ({ tab, tabName, id }: { tab: Tab; tabName: string; id: number }) =>
  axios.patch(`/api/tab/${tabName}`, { data: { tab, id } });

export const deleteTabServices = ({ tabName, id }: { tabName: string; id: number }) =>
  axios.delete(`/api/tab/${tabName}`, { data: { id } });

export const addVeterinarianServices = (data: Tab) => axios.post('/api/tab/veterinarian', data);

export const addFarrierServices = (data: Tab) => axios.post('/api/tab/farrier', data);

export const addPhoto = (photo: AddPhotoEntity) => axios.post('/api/photo', photo);
export const fetchPhotos = async (horseName: string) => {
  return await axios.get<SlideEntity[]>(`/api/photo?name=${horseName}`);
};

export const fetchHorsesByGender = async (gender: GenderType) => {
  const horses = await axios.get<{ name: string }[]>(`/api/filter/gender?gender=${gender}`);
  return horses.data;
};
