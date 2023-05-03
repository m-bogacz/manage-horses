import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const names = await prisma.horse.findMany({
    select: {
      name: true,
      profileImageUrl: true,
    },
  });

  res.json(names);
}
