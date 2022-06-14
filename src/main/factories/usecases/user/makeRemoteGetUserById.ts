import { RemoteGetUserById } from '@/data/usecase/user';
import { GetUserById } from '@/domain/usecases/user';
import { UserRepository } from '@/infra/db/prisma';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteGetUserById = (): GetUserById => {
  return new RemoteGetUserById(new UserRepository(prisma));
};
