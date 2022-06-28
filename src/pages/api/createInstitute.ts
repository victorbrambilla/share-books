import { makeRemoteRegisterInstitute } from '@/main/factories/usecases/institute/makeRemoteRegisterInstitute';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === 'POST') {
    const body = req.body;
    console.log(body);
    const institutes = await makeRemoteRegisterInstitute().perform(body);

    res.status(200).json({ institutes });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
