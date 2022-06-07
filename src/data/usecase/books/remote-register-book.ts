import { RegisterBooks } from '@/domain/usecases';
import { Prisma, PrismaClient } from '@prisma/client';

export class RemoteRegisterBook implements RegisterBooks {
  constructor(private readonly prisma: PrismaClient) {}

  async register(book: RegisterBooks.Params): Promise<RegisterBooks.Model> {
    const res = await this.prisma.books.create({
      data: book,
    });

    return res;
  }
}
