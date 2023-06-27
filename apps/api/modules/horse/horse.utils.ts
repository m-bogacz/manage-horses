import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { CreateParentHorseType } from './types';

export const updateHorseToDb = async (id: number, horse: Prisma.HorseUpdateInput) => {
  return await prisma.horse.update({
    where: {
      id: id,
    },
    data: horse,
  });
};

export const deleteHorseByName = async (name: string) => {
  return await prisma.horse.delete({
    where: {
      name,
    },
  });
};

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
