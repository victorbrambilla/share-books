import { DeleteBookByIdRepository } from '@/data/protocols/repositories/books';
import { DeleteBookById } from '@/domain/usecases/books';

export class RemoteDeleteBookById implements DeleteBookById {
  constructor(
    private readonly deleteBookByIdRepository: DeleteBookByIdRepository
  ) {}

  async perform(params: DeleteBookById.Params): Promise<DeleteBookById.Result> {
    return this.deleteBookByIdRepository.deleteById(params);
  }
}
