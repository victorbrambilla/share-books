import { GetBooksByInstituteId } from '@/domain/usecases/';
import { PrismaClient } from '@prisma/client';

export class RemoteGetBooksByInstituteId implements GetBooksByInstituteId {
  constructor(private readonly prisma: PrismaClient) {}
  async get(id: number): Promise<GetBooksByInstituteId.Model> {
    const books = await this.prisma.books.findMany({
      where: {
        instituteId: id,
      },
    });
    if (books.length > 0) {
      return books;
    } else {
      return undefined;
    }
  }
}
