import { HorseEntity, Tab } from '@/utils/types';
import axios from 'axios';

export async function addObject(newObject: any) {
  return axios.post('/api/add', newObject);
}

export const addNewsServices = (data: Tab[]) => axios.post('/api/tab/news', data);
export const addVeterinarianServices = (data: Tab[]) => axios.post('/api/tab/veterinarian', data);
export const addFarrierServices = (data: Tab[]) => axios.post('/api/tab/farrier', data);
