import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { connectParentIfExist, upsertParentHorseToDb } from '@/apps/services/utils/horse/upsertParentHorseToDb';
import { deleteHorseByName } from '@/apps/services/utils/horse/deleteHorseByName';
import { updateHorseToDb } from '@/apps/services/utils/horse/updateHorseToDb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { name } = req.query;

    const horse = await prisma.horse.findUnique({
      where: { name: name as string },
      include: {
        news: true,
        veterinarian: true,
        farrier: true,
        mother: true,
        father: true,
      },
    });
    res.json(horse);
  } else if (req.method === 'POST') {
    const { name, birthday, sex, place, mother, father, images, profileImageUrl } = req.body;

    try {
      await upsertParentHorseToDb({ name: mother });
      await upsertParentHorseToDb({ name: father });

      const newHorse = await prisma.horse.create({
        data: {
          name,
          birthday: new Date(birthday),
          sex,
          place,
          images,
          profileImageUrl,
          mother: connectParentIfExist(mother),
          father: connectParentIfExist(father),
        },
      });

      res.json(newHorse);
    } catch (e) {
      res.status(500).json({ message: 'Failed to create the horse.' });
    }
  } else if (req.method === 'PUT') {
    const { name, birthday, sex, place, id, mother, father } = req.body;

    try {
      if (mother) {
        await upsertParentHorseToDb({ name: mother });
      }
      if (father) {
        await upsertParentHorseToDb({ name: father });
      }

      const horse = {
        name: name || undefined,
        birthday: birthday || undefined,
        sex: sex || undefined,
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
