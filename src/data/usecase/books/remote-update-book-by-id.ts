import { UpdateBookById } from '@/domain/usecases';
import { PrismaClient } from '@prisma/client';

export class RemoteUpdateBookById implements UpdateBookById {
  constructor(private readonly prisma: PrismaClient) {}
  async update(
    id: number,
    book: UpdateBookById.Params
  ): Promise<UpdateBookById.Model> {
    const res = await this.prisma.books.update({
      where: {
        id: id,
      },
      data: book,
    });
    return res;
  }
}
