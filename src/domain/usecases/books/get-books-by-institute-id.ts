import { BookModel } from '@/domain/models';

export interface GetBooksByInstituteId {
  perform(
    params: GetBooksByInstituteId.Params
  ): Promise<GetBooksByInstituteId.Result>;
}

export namespace GetBooksByInstituteId {
  export type Params = { id: number };
  export type Result = BookModel[] | undefined;
}
