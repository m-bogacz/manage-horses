import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export const updateHorseToDb = async (id: number, horse: Prisma.HorseUpdateInput) => {
  return await prisma.horse.update({
    where: {
      id: id,
    },
    data: horse,
  });
};
