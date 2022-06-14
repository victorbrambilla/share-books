import { RemoteRegisterInstitute } from '@/data/usecase/institute';
import { RegisterInstitute } from '@/domain/usecases/institute';

import { InstitutesRepository } from '@/infra/db/prisma';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteRegisterInstitute = (): RegisterInstitute => {
  return new RemoteRegisterInstitute(new InstitutesRepository(prisma));
};
