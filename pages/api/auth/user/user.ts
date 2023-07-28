import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (session?.user.role !== 'admin') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { user } = req.query;

  try {
    const foundUser = await prisma.user.findUnique({
      where: { id: user as string },
    });

    return res.status(200).json(foundUser);
  } catch (error) {
    return res.status(400).json({ error: 'An error occurred while activating the user.' });
  }
}
