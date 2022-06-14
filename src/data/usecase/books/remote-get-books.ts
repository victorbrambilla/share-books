import { GetBooksRepository } from '@/data/protocols/repositories/books';
import { GetBooks } from '@/domain/usecases/books';

export class RemoteGetBooks implements GetBooks {
  constructor(private readonly getBooksRepository: GetBooksRepository) {}
  async perform(): Promise<GetBooks.Result> {
    const books = await this.getBooksRepository.getBooks();
    if (books) {
      return books;
    } else {
      return undefined;
    }
  }
}
