import { RemoteGetInstitutesByAdminId } from '@/data/usecase/institute/remote-get-institutes-by-admin-id';
import { GetInstitutesByAdminId } from '@/domain/usecases';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteGetInstitutesByAdminId = (): GetInstitutesByAdminId => {
  return new RemoteGetInstitutesByAdminId(prisma);
};
