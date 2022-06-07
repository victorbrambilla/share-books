import { BookModel } from '@/domain/models';

export interface GetBooks {
  get(): Promise<GetBooks.Model>;
}
export namespace GetBooks {
  export type Model = BookModel[] | undefined;
}
