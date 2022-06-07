import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      res.status(400).json({ error: 'User not found' });
    } else {
      res.status(200).json({ user });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
