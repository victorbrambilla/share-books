import { makeRemoteRegisterInstitute } from '@/main/factories/usecases/institute/makeRemoteRegisterInstitute';
import { makeRemoteUpdateInstituteById } from '@/main/factories/usecases/institute/makeRemoteUpdateInstituteById';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === 'PUT') {
    const body = req.body;
    const institute = await makeRemoteUpdateInstituteById().perform({
      instituteId: body.id,
      institute: body,
    });

    res.status(200).json({ institute });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
