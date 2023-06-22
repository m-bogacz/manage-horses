import { prisma } from '@/lib/prisma';
import { CreateParentHorseType } from '../types';

export const upsertParentHorseToDb = async ({ name, createAsParent = true }: CreateParentHorseType) => {
  return await prisma.horse.upsert({
    where: { name },
    update: { name },
    create: { name, createAsParent },
  });
};

export const connectParentIfExist = (parentName: string) => {
  return parentName
    ? {
        connect: { name: parentName },
      }
    : undefined;
};
