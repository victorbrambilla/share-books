import { RemoteRegisterUser } from '@/data/usecase/user/remote-register-user';
import { RegisterUser } from '@/domain/usecases';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteRegisterUser = (): RegisterUser => {
  return new RemoteRegisterUser(prisma);
};
