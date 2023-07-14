import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { compare, hash } from 'bcrypt';

export const createUser = async ({ email, name, password }: { email: string; name: string; password: string }) =>
  await prisma.user.create({
    data: {
      email,
      name,
      password: await hash(password, 10),
    },
  });

export const getUser = async (name: string, password: string) => {
  const user = await prisma.user.findFirst({
    where: { OR: [{ name }] },
  });

  if (!user?.password || !(await compare(password, user.password))) {
    return null;
  }

  return user;
};

export const findUsers = async () => await prisma.user.findMany();

export const handleActivationUser = async (userId: string, action: 'deactivate' | 'activate') => {
  return await prisma.user.update({
    where: { id: userId },
    data: { activated: action === 'activate' ? true : false },
  });
};
