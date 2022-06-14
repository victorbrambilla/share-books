import { BookModel } from '@/domain/models';

export interface GetBooks {
  perform(): Promise<GetBooks.Result>;
}
export namespace GetBooks {
  export type Result = BookModel[] | undefined;
}
