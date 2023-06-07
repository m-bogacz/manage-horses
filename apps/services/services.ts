import axios from 'axios';
import { SlideEntity, Tab } from '@/utils/types';
import { AddPhotoEntity, PhotosEntity, SideBarListEntity } from './types';

export const revalidate = async (path: string) => {
  return await axios.post(`/api/revalidate?secret=1234567`, { path });
};

export const addHorse = (newHorse: any) => axios.post('/api/horse', newHorse);

export const deleteHorse = (name: string) => axios.delete('/api/horse', { data: { name } });

export const fetchHorses = async (queryName: string, queryAge?: string) => {
  const url = queryAge ? `/api/search?age=${queryAge}` : `/api/search?name=${queryName}`;
  const res = await axios.get(url);
  return res.data;
};

export const addNewsServices = (data: Tab) => axios.post('/api/tab/news', data);
export const deleteNewsServices = (id: any) => axios.delete('/api/tab/news', id);

export const addVeterinarianServices = (data: Tab) => axios.post('/api/tab/veterinarian', data);
export const addFarrierServices = (data: Tab) => axios.post('/api/tab/farrier', data);

export const addPhoto = (photo: AddPhotoEntity) => axios.post('/api/photo', photo);
export const fetchPhotos = async (horseName: string) => {
  return await axios.get<SlideEntity[]>(`/api/photo?name=${horseName}`);
};
