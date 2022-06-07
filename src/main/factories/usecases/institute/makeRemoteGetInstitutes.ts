import { RemoteGetInstitutes } from '@/data/usecase/institute/remote-get-institutes';
import { GetInstitutes } from '@/domain/usecases';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteGetInstitutes = (): GetInstitutes => {
  return new RemoteGetInstitutes(prisma);
};
