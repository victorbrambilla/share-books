import { RemoteDeleteBookById } from '@/data/usecase/books';
import { DeleteBookById } from '@/domain/usecases/books';
import { BooksRepository } from '@/infra/db/prisma';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteDeleteBookById = (): DeleteBookById => {
  return new RemoteDeleteBookById(new BooksRepository(prisma));
};
