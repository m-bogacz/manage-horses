import { prisma } from '@/lib/prisma';

export const deleteHorseByName = async (name: string) => {
  return await prisma.horse.delete({
    where: {
      name,
    },
  });
};
