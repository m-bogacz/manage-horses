import { handleActivationUser } from '@/apps/api/modules/user/user.utils';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id } = req.body;

  try {
    const user = await handleActivationUser(id, 'deactivate');

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: 'An error occurred while activating the user.' });
  }
}
