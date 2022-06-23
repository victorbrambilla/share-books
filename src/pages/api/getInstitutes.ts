import { makeRemoteGetInstitutes } from '@/main/factories/usecases/institute/makeRemoteGetInstitutes';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === 'GET') {
    const institutes = await makeRemoteGetInstitutes().perform();

    res.status(200).json({ institutes });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
