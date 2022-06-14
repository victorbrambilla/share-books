import { RegisterBookRepository } from '@/data/protocols/repositories/books';
import { RegisterBooks } from '@/domain/usecases/books';

export class RemoteRegisterBook implements RegisterBooks {
  constructor(
    private readonly registerBookRepository: RegisterBookRepository
  ) {}

  async perform(params: RegisterBooks.Params): Promise<RegisterBooks.Result> {
    const book = await this.registerBookRepository.registerBook(params);
    return book;
  }
}
