import { GetBooks } from '@/domain/usecases';

export interface GetBooksRepository {
  getBooks: () => Promise<GetBooksRepository.Result>;
}

export namespace GetBooksRepository {
  export type Result = GetBooks.Result;
}
