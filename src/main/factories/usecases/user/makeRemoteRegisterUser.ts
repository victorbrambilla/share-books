import { RemoteRegisterUser } from '@/data/usecase/user';
import { RegisterUser } from '@/domain/usecases/user';
import { UserRepository } from '@/infra/db/prisma';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteRegisterUser = (): RegisterUser => {
  return new RemoteRegisterUser(new UserRepository(prisma));
};
