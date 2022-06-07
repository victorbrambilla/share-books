import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
type Data = {
  name?: string;
  error?: string;
  user?: any;
};

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const { email, password, userName, name } = req.body;

    try {
      const user = await prisma.user.findFirst({
        where: {
          email,
        },
      });
      if (user) {
        res.status(400).json({ error: 'User already exists' });
      }

      const hash = await bcrypt.hash(password, 0);
      await prisma.user.create({
        data: {
          email,
          name,
          password: hash,
          userName,
        },
      });
      return res.status(200).end();
    } catch (error) {
      return res.status(503).json({ error: 'Error on create user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
