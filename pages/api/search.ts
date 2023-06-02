import { prisma } from '@/lib/prisma';
import { searchHorsesByAge, searchHorsesByCurrentYear } from '@/apps/helpers/date';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: `HTTP method ${req.method} is not supported.` });
  }

  const nameQuery = req.query.name as string;
  const ageQuery = parseInt(req.query.age as string);

  let whereClause: any = {};

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
    where: whereClause,
    select: {
      name: true,
      profileImageUrl: true,
    },
  });

  res.json(results);
}
