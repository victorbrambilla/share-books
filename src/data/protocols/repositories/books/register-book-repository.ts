import { RegisterBooks } from '@/domain/usecases/books';

export interface RegisterBookRepository {
  registerBook: (params: RegisterBooks.Params) => Promise<RegisterBooks.Result>;
}

export namespace RegisterBookRepository {
  export type Params = RegisterBooks.Params;
  export type Result = RegisterBooks.Result;
}
