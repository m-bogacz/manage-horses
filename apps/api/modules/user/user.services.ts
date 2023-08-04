import { Prisma } from '@prisma/client';
import { api_client } from '../../api_client';
import { UserType } from '@/utils/types/user';

export const createUserServices = async (user: Prisma.UserCreateInput) => {
  return await api_client.post('/api/auth/register', user);
};

export const getUserServices = async (userId: string): Promise<UserType> => {
  const result = await api_client.get<UserType>(`/api/auth/user/user?userId=${userId}`);
  return result.data;
};

export const getAllUsersServices = async (): Promise<UserType[]> => {
  const result = await api_client.get(`/api/auth/user/users`);
  return result.data;
};

export const activateUserServices = async (userId: string) => {
  return await api_client.post('/api/auth/user/activate', { id: userId });
};
export const deactivateUserServices = async (userId: string) => {
  return await api_client.post('/api/auth/user/deactivate', { id: userId });
};
