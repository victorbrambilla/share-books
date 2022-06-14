import { RemoteDeleteUserById } from '@/data/usecase/user';
import { DeleteUserById } from '@/domain/usecases/user';
import { UserRepository } from '@/infra/db/prisma';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteDeleteUserById = (): DeleteUserById => {
  return new RemoteDeleteUserById(new UserRepository(prisma));
};
