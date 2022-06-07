import { BookModel } from '@/domain/models';

export interface GetBooksByInstituteId {
  get(id: number): Promise<GetBooksByInstituteId.Model>;
}

export namespace GetBooksByInstituteId {
  export type Model = BookModel[] | undefined;
}
