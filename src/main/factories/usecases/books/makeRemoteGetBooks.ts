import { RemoteGetBooks } from '@/data/usecase/books';
import { GetBooks } from '@/domain/usecases/books';

import { BooksRepository } from '@/infra/db/prisma';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteGetBooks = (): GetBooks => {
  return new RemoteGetBooks(new BooksRepository(prisma));
};
