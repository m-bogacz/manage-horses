import { createUserHandler } from '@/apps/api/modules/user/user.handlers';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (session?.user.role !== 'admin') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    const { name, password, email } = req.body;
    try {
      const user = await createUserHandler({ name, email, password });

      res.status(200).json(user);
    } catch (error) {
      console.log('nie udalo się stworzyć usera');
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
