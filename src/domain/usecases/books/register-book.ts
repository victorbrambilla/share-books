import { BookModel } from '@/domain/models';

export interface RegisterBooks {
  register(book: RegisterBooks.Params): Promise<RegisterBooks.Model>;
}
export namespace RegisterBooks {
  export type Params = {
    name: string;
    edition: string;
    year: Date;
    releaseDate: Date;
    status: string;
    stock: number;
    address: string;
    instituteId: number;
  };
  export type Model = BookModel;
}
