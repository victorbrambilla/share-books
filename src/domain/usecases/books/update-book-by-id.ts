import { BookModel } from '@/domain/models';

export interface UpdateBookById {
  update(
    id: number,
    book: UpdateBookById.Params
  ): Promise<UpdateBookById.Model>;
}
export namespace UpdateBookById {
  export type Params = {
    name: string;
    edition: string;
    year: Date;
    releaseDate: string;
    status: string;
    stock: number;
    address: string;
    bookId: number;
  };
  export type Model = BookModel;
}
