import { prisma } from '@/lib/prisma';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, birthday, sex, place, mother, father, images, profileImageUrl } = req.body;

    try {
      const motherHorse = await prisma.horse.findUnique({
        where: {
          name: name,
        },
      });

      console.log(motherHorse);

      if (!motherHorse) {
        await prisma.horse.create({
          data: {
            name: mother,
            createAsParent: true,
          },
        });
      }

      const fatherHorse = await prisma.horse.findUnique({
        where: {
          name: name,
        },
      });

      if (!fatherHorse) {
        await prisma.horse.create({
          data: {
            name: father,
            createAsParent: true,
          },
        });
      }

      const newHorse = await prisma.horse.create({
        data: {
          name,
          birthday: new Date(birthday),
          sex,
          place,
          images,
          profileImageUrl,
          mother: {
            connect: {
              name: mother,
            },
          },
          father: {
            connect: {
              name: father,
            },
          },
        },
      });

      res.json(newHorse);
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
