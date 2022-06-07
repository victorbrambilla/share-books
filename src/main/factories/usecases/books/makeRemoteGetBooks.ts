import { RemoteGetBooks } from '@/data/usecase/books/remote-get-books';
import { GetBooks } from '@/domain/usecases';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteGetBooks = (): GetBooks => {
  return new RemoteGetBooks(prisma);
};
