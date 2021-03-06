import { UpdateBookById } from '@/domain/usecases/books';

export interface UpdateBookByIdRepository {
  updateBookById(
    params: UpdateBookByIdRepository.Params
  ): Promise<UpdateBookByIdRepository.Result>;
}

export namespace UpdateBookByIdRepository {
  export type Params = UpdateBookById.Params;
  export type Result = UpdateBookById.Result;
}
