import { RemoteDeleteInstituteById } from '@/data/usecase/institute';
import { DeleteInstituteById } from '@/domain/usecases/institute';
import { InstitutesRepository } from '@/infra/db/prisma';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteDeleteInstituteById = (): DeleteInstituteById => {
  return new RemoteDeleteInstituteById(new InstitutesRepository(prisma));
};
