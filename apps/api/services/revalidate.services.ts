import { api_client } from '../api_client';

export const revalidate = (path: string) => {
  return api_client.post(`/api/revalidate?secret=1234567`, { path });
};
