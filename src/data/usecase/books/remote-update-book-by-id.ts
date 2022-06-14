import { UpdateBookByIdRepository } from '@/data/protocols/repositories/books';
import { UpdateBookById } from '@/domain/usecases/books';

export class RemoteUpdateBookById implements UpdateBookById {
  constructor(
    private readonly updateBookByIdRepository: UpdateBookByIdRepository
  ) {}
  async perform(params: UpdateBookById.Params): Promise<UpdateBookById.Result> {
    const bookUpdated = await this.updateBookByIdRepository.updateBookById(
      params
    );
    return bookUpdated;
  }
}
