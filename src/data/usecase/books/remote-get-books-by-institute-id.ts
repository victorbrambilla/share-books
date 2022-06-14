import { GetBooksByInstituteIdRepository } from '@/data/protocols/repositories/books';
import { GetBooksByInstituteId } from '@/domain/usecases/books';

export class RemoteGetBooksByInstituteId implements GetBooksByInstituteId {
  constructor(
    private readonly getBooksByInstituteIdRepository: GetBooksByInstituteIdRepository
  ) {}
  async perform(
    params: GetBooksByInstituteId.Params
  ): Promise<GetBooksByInstituteId.Result> {
    const books = await this.getBooksByInstituteIdRepository.getById({
      id: params.id,
    });
    return books;
  }
}
