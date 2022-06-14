import {
  DeleteBookByIdRepository,
  GetBooksByInstituteIdRepository,
  GetBooksRepository,
  RegisterBookRepository,
} from '@/data/protocols/repositories/books';
import { UpdateBookByIdRepository } from '@/data/protocols/repositories/books/update-book-by-id-repository';

import { PrismaClient } from '@prisma/client';

export class BooksRepository
  implements
    GetBooksRepository,
    GetBooksByInstituteIdRepository,
    RegisterBookRepository,
    UpdateBookByIdRepository,
    DeleteBookByIdRepository
{
  constructor(private readonly prisma: PrismaClient) {}
  async getBooks(): Promise<GetBooksRepository.Result> {
    const books = await this.prisma.books.findMany();
    if (books.length > 0) {
      return books;
    } else {
      return undefined;
    }
  }

  async getById(
    params: GetBooksByInstituteIdRepository.Params
  ): Promise<GetBooksByInstituteIdRepository.Result> {
    const books = await this.prisma.books.findMany({
      where: {
        instituteId: params.id,
      },
    });
    if (books.length > 0) {
      return books;
    } else {
      return undefined;
    }
  }

  async registerBook(
    params: RegisterBookRepository.Params
  ): Promise<RegisterBookRepository.Result> {
    const res = await this.prisma.books.create({
      data: params,
    });

    return res;
  }

  async updateBookById(
    params: UpdateBookByIdRepository.Params
  ): Promise<UpdateBookByIdRepository.Result> {
    const res = await this.prisma.books.update({
      where: {
        id: params.bookId,
      },
      data: params.book,
    });
    return res;
  }

  async deleteById(
    params: DeleteBookByIdRepository.Params
  ): Promise<DeleteBookByIdRepository.Result> {
    const res = await this.prisma.books.delete({
      where: {
        id: params.bookId,
      },
    });
    return res;
  }
}
