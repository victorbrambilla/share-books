import { RemoteUpdateInstituteById } from '@/data/usecase/institute';
import { UpdateInstituteById } from '@/domain/usecases/institute';

import { InstitutesRepository } from '@/infra/db/prisma';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteUpdateInstituteById = (): UpdateInstituteById => {
  return new RemoteUpdateInstituteById(new InstitutesRepository(prisma));
};
