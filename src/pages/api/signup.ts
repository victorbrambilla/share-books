import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { makeRemoteRegisterUser } from '@/main/factories/usecases/user/makeRemoteRegisterUser';
type Data = {
  name?: string;
  error?: string;
  user?: any;
};

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const { email, password, userName, name } = req.body;
    console.log(req.body);

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const userCreated = makeRemoteRegisterUser().perform({
      name,
      email,
      password: await bcrypt.hash(password, 10),
      userName,
    });

    return res.status(200).end({ userCreated });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
