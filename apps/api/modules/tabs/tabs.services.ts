import { Tab } from '@/utils/types/horse';
import { api_client } from '../../api_client';

export const addNewsServices = (data: Tab) => api_client.post('/api/tab/news', data);

export const updateTabServices = ({ tab, tabName, id }: { tab: Tab; tabName: string; id: number }) =>
  api_client.patch(`/api/tab/${tabName}`, { data: { tab, id } });

export const deleteTabServices = ({ tabName, id }: { tabName: string; id: number }) =>
  api_client.delete(`/api/tab/${tabName}`, { data: { id } });

export const addVeterinarianServices = (data: Tab) => api_client.post('/api/tab/veterinarian', data);

export const addFarrierServices = (data: Tab) => api_client.post('/api/tab/farrier', data);
