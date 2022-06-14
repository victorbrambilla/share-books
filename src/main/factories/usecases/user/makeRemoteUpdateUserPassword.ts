import { RemoteUpdateUserPassword } from '@/data/usecase/user';
import { UpdateUserPassword } from '@/domain/usecases/user';
import { UserRepository } from '@/infra/db/prisma';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteUpdateUserPassword = (): UpdateUserPassword => {
  return new RemoteUpdateUserPassword(new UserRepository(prisma));
};
