import { BookModel } from '@/domain/models';

export interface UpdateBookById {
  perform(params: UpdateBookById.Params): Promise<UpdateBookById.Result>;
}
export namespace UpdateBookById {
  export type Params = {
    bookId: number;
    book: book;
  };
  export type book = {
    name: string;
    edition: string;
    year: Date;
    releaseDate: Date;
    status: string;
    stock: number;
    address: string;
    instituteId: number;
  };
  export type Result = BookModel;
}
