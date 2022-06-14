import { GetBooksByInstituteId } from '@/domain/usecases/books';

export interface GetBooksByInstituteIdRepository {
  getById: (
    params: GetBooksByInstituteIdRepository.Params
  ) => Promise<GetBooksByInstituteIdRepository.Result>;
}

export namespace GetBooksByInstituteIdRepository {
  export type Params = GetBooksByInstituteId.Params;
  export type Result = GetBooksByInstituteId.Result;
}
