import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import {
  upsertParentHorseToDb,
  connectParentIfExist,
  updateHorseToDb,
  deleteHorseByName,
} from '@/apps/api/modules/horse/horse.utils';

import { getToken } from 'next-auth/jwt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req });

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.method === 'GET') {
    const { name } = req.query;

    const horse = await prisma.horse.findUnique({
      where: { name: name as string },
      include: {
        news: {
          include: {
            tabs: true,
          },
        },
        veterinarian: {
          include: {
            tabs: true,
          },
        },
        farrier: {
          include: {
            tabs: true,
          },
        },
        mother: true,
        father: true,
      },
    });
    res.json(horse);
  } else if (req.method === 'POST') {
    const { name, birthday, gender, place, mother, father, images, profileImageUrl } = req.body;

    try {
      await upsertParentHorseToDb({ name: mother, gender: 'mare' });
      await upsertParentHorseToDb({ name: father, gender: 'stallion' });

      const newHorse = await prisma.horse.create({
        data: {
          name,
          birthday: new Date(birthday),
          gender,
          place,
          images,
          profileImageUrl,
          mother: connectParentIfExist(mother),
          father: connectParentIfExist(father),
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

      res.json(newHorse);
    } catch (e) {
      res.status(500).json({ message: 'Failed to create the horse.' });
    }
  } else if (req.method === 'PUT') {
    const { name, birthday, gender, place, id, mother, father } = req.body;

    try {
      if (mother) {
        await upsertParentHorseToDb({ name: mother, gender: 'mare' });
      }
      if (father) {
        await upsertParentHorseToDb({ name: father, gender: 'stallion' });
      }

      const horse = {
        name: name || undefined,
        birthday: birthday || undefined,
        gender: gender || undefined,
        place: place || undefined,
        mother: connectParentIfExist(mother),
        father: connectParentIfExist(father),
      } satisfies Prisma.HorseUpdateInput;

      await updateHorseToDb(id, horse);

      res.status(200).json({ message: `Horse data has been successfully update.` });
    } catch (error) {
      console.log(error);
    }
  } else if (req.method === 'DELETE') {
    const { name } = req.body;
    try {
      await deleteHorseByName(name);

      res.status(200).json({ message: `Horse ${name} has been successfully deleted.` });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete the horse.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
