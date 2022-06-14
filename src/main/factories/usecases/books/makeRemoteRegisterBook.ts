import { RemoteRegisterBook } from '@/data/usecase/books';
import { RegisterBooks } from '@/domain/usecases/books';

import { BooksRepository } from '@/infra/db/prisma';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteRegisterBook = (): RegisterBooks => {
  return new RemoteRegisterBook(new BooksRepository(prisma));
};
