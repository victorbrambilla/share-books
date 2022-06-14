import { RemoteGetInstitutesByAdminId } from '@/data/usecase/institute';
import { GetInstitutesByAdminId } from '@/domain/usecases/institute';

import { InstitutesRepository } from '@/infra/db/prisma';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteGetInstitutesByAdminId = (): GetInstitutesByAdminId => {
  return new RemoteGetInstitutesByAdminId(new InstitutesRepository(prisma));
};
