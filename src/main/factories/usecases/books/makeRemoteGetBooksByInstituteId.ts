import { RemoteGetBooksByInstituteId } from '@/data/usecase/books/remote-get-books-by-institute-id';
import { GetBooksByInstituteId } from '@/domain/usecases';
import { prisma } from '@/infra/http/prismaClient';

export const makeRemoteGetBooksByInstituteId = (): GetBooksByInstituteId => {
  return new RemoteGetBooksByInstituteId(prisma);
};
