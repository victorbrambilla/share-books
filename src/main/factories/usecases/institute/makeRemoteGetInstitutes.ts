import { RemoteGetInstitutes } from '@/data/usecase/institute';
import { GetInstitutes } from '@/domain/usecases/institute';

import { InstitutesRepository } from '@/infra/db/prisma';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteGetInstitutes = (): GetInstitutes => {
  return new RemoteGetInstitutes(new InstitutesRepository(prisma));
};
