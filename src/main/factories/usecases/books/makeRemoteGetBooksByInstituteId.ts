import { RemoteGetBooksByInstituteId } from '@/data/usecase/books';
import { GetBooksByInstituteId } from '@/domain/usecases/books';

import { BooksRepository } from '@/infra/db/prisma';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteGetBooksByInstituteId = (): GetBooksByInstituteId => {
  return new RemoteGetBooksByInstituteId(new BooksRepository(prisma));
};
