import { prisma } from '@/lib/prisma';
import { CreateParentHorseType } from './types';

export const upsertParentHorseToDb = async ({ name, gender, createAsParent = true }: CreateParentHorseType) => {
  return await prisma.horse.upsert({
    where: { name },
    update: { name },
    create: {
      name,
      gender,
      createAsParent,
      news: {
        create: {
          type: 'news',
        },
      },
      veterinarian: {
        create: {
          type: 'veterinarian',
        },
      },
      farrier: {
        create: {
          type: 'farrier',
        },
      },
    },
  });
};

export const connectParentIfExist = (parentName: string) => {
  return parentName
    ? {
        connect: { name: parentName },
      }
    : undefined;
};
