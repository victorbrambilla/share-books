import { RemoteRegisterInstitute } from '@/data/usecase/institute/remote-register-institute';
import { RegisterInstitute } from '@/domain/usecases';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteRegisterInstitute = (): RegisterInstitute => {
  return new RemoteRegisterInstitute(prisma);
};
