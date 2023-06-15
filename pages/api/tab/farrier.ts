import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, title, date, description, executedBy } = req.body;

    try {
      const horse = await prisma.farrierTab.create({
        data: {
          title: title,
          date: date,
          description: description,
          executedBy: executedBy,
          farrier: {
            connect: {
              name: name,
            },
          },
        },
      });

      res.status(200).json(horse);
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  } else if (req.method === 'GET') {
    const { name } = req.query;

    try {
      const newsTabs = await prisma.farrierTab.findMany({
        where: {
          horseName: name as string,
        },
      });

      res.status(200).json(newsTabs);
    } catch (error) {
      res.status(500).json({ error: 'Błąd podczas pobierania tabów ' + name });
    }
  } else if (req.method === 'PATCH') {
    const { id, tab } = req.body.data;
    const updatedData = await prisma.farrierTab.update({
      where: { id: id },
      data: tab,
    });

    res.json(updatedData);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
