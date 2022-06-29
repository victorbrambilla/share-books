import { makeRemoteGetInstitutesByAdminId } from '@/main/factories/usecases/institute/makeRemoteGetInstitutesByAdminId';
import { makeRemoteRegisterInstitute } from '@/main/factories/usecases/institute/makeRemoteRegisterInstitute';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === 'GET') {
    const adminId = req.query.adminId;
    const findInstitute = await makeRemoteGetInstitutesByAdminId().perform({
      id: +adminId,
    });
    if (!findInstitute) {
      return res.status(400).json({});
    }
    res.status(200).json({ findInstitute });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
