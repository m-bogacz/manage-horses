import { findUsers } from '@/apps/api/modules/user/user.utils';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const foundUser = await findUsers();

    return res.status(200).json(foundUser);
  } catch (error) {
    return res.status(400).json({ error: 'An error occurred while activating the user.' });
  }
}
