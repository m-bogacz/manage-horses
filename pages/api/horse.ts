import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

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
      res.status(500).json({ message: 'Failed to create the horse.' });
    }
  } else if (req.method === 'DELETE') {
    const { name } = req.body;

    try {
      await prisma.horse.delete({
        where: {
          name,
        },
      });

      res.status(200).json({ message: `Horse ${name} has been successfully deleted.` });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete the horse.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
