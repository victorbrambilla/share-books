import { RemoteGetUserById } from '@/data/usecase/user/remote-get-user-by-id';
import { GetUserById } from '@/domain/usecases';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteGetUserById = (): GetUserById => {
  return new RemoteGetUserById(prisma);
};
