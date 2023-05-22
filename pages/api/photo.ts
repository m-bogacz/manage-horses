import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, src, alt } = req.body;

    try {
      const photo = await prisma.slideEntity.create({
        data: {
          src: src,
          alt: alt,
          photos: {
            connect: {
              name: name,
            },
          },
        },
      });

      res.status(200).json(photo);
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  } else if (req.method === 'GET') {
    const { name } = req.query;

    try {
      const photos = await prisma.slideEntity.findMany({
        where: {
          horseName: name as string,
        },
      });

      res.status(200).json(photos);
    } catch (error) {
      res.status(500).json({ error: 'Error downloading photos ' + name });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
