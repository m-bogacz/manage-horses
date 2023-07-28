import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    const { name, title, date, description, executedBy } = req.body;

    try {
      const horse = await prisma.newsTab.create({
        data: {
          title: title,
          date: date,
          description: description,
          executedBy: executedBy,
          news: {
            connect: {
              horseName: name,
            },
          },
        },
      });
      res.status(200).json(horse);
    } catch (e) {
      res.status(500).json({ message: e });
    }
  } else if (req.method === 'GET') {
    const { name } = req.query;

    try {
      const newsTabs = await prisma.news.findMany({
        where: {
          horseName: name as string,
        },
        select: {
          tabs: true,
        },
      });

      res.status(200).json(newsTabs);
    } catch (error) {
      res.status(500).json({ error: 'Błąd podczas pobierania tabów ' + name });
    }
  } else if (req.method === 'PATCH') {
    const { id, tab } = req.body.data;
    const updatedData = await prisma.newsTab.update({
      where: { id: id },
      data: tab,
    });

    res.json(updatedData);
  } else if (req.method === 'DELETE') {
    const id = req.body.id;

    const remove = await prisma.newsTab.delete({
      where: { id: id },
    });

    res.json(remove);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
