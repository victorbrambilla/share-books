import { DeleteBookById } from '@/domain/usecases/books';

export interface DeleteBookByIdRepository {
  deleteById: (
    params: DeleteBookByIdRepository.Params
  ) => Promise<DeleteBookByIdRepository.Result>;
}
export namespace DeleteBookByIdRepository {
  export type Params = DeleteBookById.Params;
  export type Result = DeleteBookById.Result;
}
