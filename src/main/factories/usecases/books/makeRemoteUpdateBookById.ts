import { RemoteRegisterBook } from '@/data/usecase/books/remote-register-book';
import { RegisterBooks } from '@/domain/usecases';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteRegisterBook = (): RegisterBooks => {
  return new RemoteRegisterBook(prisma);
};
