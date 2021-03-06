import { GetInstitutesByAdminId } from '@/domain/usecases/institute';

export interface GetInstitutesByAdminIdRepository {
  getById: (
    params: GetInstitutesByAdminIdRepository.Params
  ) => Promise<GetInstitutesByAdminId.Result>;
}
export namespace GetInstitutesByAdminIdRepository {
  export type Params = GetInstitutesByAdminId.Params;
  export type Result = GetInstitutesByAdminId.Result;
}
