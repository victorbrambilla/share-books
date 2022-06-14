import { BookModel } from '@/domain/models';

export interface DeleteBookById {
  perform(params: DeleteBookById.Params): Promise<DeleteBookById.Result>;
}
export namespace DeleteBookById {
  export type Params = {
    bookId: number;
  };
  export type Result = BookModel;
}
