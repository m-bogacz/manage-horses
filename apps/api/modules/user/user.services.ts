import { Prisma } from '@prisma/client';
import { api_client } from '../../api_client';

export const createUserServices = async (user: Prisma.UserCreateInput) => {
  return await api_client.post('/api/auth/register', user);
};
