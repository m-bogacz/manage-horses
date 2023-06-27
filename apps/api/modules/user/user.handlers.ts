import { createUser } from './user.utils';

export const createUserHandler = async ({
  name,
  email,
  password,
}: {
  email: string;
  name: string;
  password: string;
}) => {
  try {
    return await createUser({ name, email, password });
  } catch (err) {
    throw err;
  }
};
