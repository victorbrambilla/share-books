import { BookModel } from '@/domain/models';

export interface RegisterBooks {
  perform(params: RegisterBooks.Params): Promise<RegisterBooks.Result>;
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
  export type Result = BookModel;
}
