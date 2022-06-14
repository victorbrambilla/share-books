import { GetBooksByInstituteId } from '@/domain/usecases';

export interface GetBooksByInstituteIdRepository {
  getById: (
    params: GetBooksByInstituteIdRepository.Params
  ) => Promise<GetBooksByInstituteId.Result>;
}

export namespace GetBooksByInstituteIdRepository {
  export type Params = GetBooksByInstituteId.Params;
  export type Result = GetBooksByInstituteId.Result;
}
