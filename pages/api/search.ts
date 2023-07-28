import { prisma } from '@/lib/prisma';
import { searchHorsesByAge, searchHorsesByCurrentYear } from '@/apps/helpers/date';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Prisma } from '@prisma/client';
import { getSession } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.method !== 'GET') {
    res.status(405).json({ message: `HTTP method ${req.method} is not supported.` });
  }

  const nameQuery = req.query.name as string;
  const ageQuery = parseInt(req.query.age as string);

  let whereClause: Prisma.HorseWhereInput = {};

  if (nameQuery) {
    whereClause.name = { contains: nameQuery, mode: 'insensitive' };
  }

  if (ageQuery === 0 && !isNaN(ageQuery)) {
    const { gte, lt } = searchHorsesByCurrentYear();
    whereClause.birthday = { gte, lt };
  }

  if (ageQuery) {
    const { gte, lt } = searchHorsesByAge(ageQuery);
    whereClause.birthday = { gte, lt };
  }

  const results = await prisma.horse.findMany({
    where: {
      ...whereClause,
      createAsParent: {
        equals: false,
      },
    },
    select: {
      name: true,
      profileImageUrl: true,
    },
  });

  res.json(results);
}
