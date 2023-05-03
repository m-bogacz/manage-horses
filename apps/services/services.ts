import axios from 'axios';

export const revalidate = async (path: string) => {
  return await axios.post(`/api/revalidate?secret=1234567`, { path });
};
