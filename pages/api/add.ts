import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, birthday, place, sex, profileImageUrl, mother, father, images } = req.body;

      const horse = await prisma.horse.create({
        data: {
          name,
          birthday,
          sex,
          profileImageUrl,
          place,
          mother,
          father,
          images,
        },
      });
      res.status(200).json(horse);
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
