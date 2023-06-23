import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { gender } = req.query;

    try {
      const horses = await prisma.horse.findMany({
        where: {
          gender: gender as Prisma.EnumTypeGenderNullableFilter,
        },
        select: {
          name: true,
        },
      });
      res.status(200).json(horses);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
