import { Prisma } from '@prisma/client';
import { createUser } from './user.utils';

export const createUserHandler = async ({ name, email, password }: any) => {
  try {
    return await createUser({ name, email, password });
  } catch (err) {
    throw err;
  }
};
