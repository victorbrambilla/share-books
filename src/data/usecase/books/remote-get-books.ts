import { GetBooks } from '@/domain/usecases';
import { PrismaClient } from '@prisma/client';

export class RemoteGetBooks implements GetBooks {
  constructor(private readonly prisma: PrismaClient) {}
  async get(): Promise<GetBooks.Model> {
    const books = await this.prisma.books.findMany();
    if (books.length > 0) {
      return books;
    } else {
      return undefined;
    }
  }
}
