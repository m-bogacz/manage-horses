import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, title, date, description } = req.body;
    try {
      const horse = await prisma.newsTab.create({
        data: {
          title: title,
          date: date,
          description: description,
          news: {
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
      const newsTabs = await prisma.newsTab.findMany({
        where: {
          tabName: name as string,
        },
      });

      res.status(200).json(newsTabs);
    } catch (error) {
      res.status(500).json({ error: 'Błąd podczas pobierania tabów ' + name });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
