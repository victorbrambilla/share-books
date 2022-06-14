import { InstituteModel } from '@/domain/models';

export interface GetInstitutesByAdminId {
  perform(
    params: GetInstitutesByAdminId.Params
  ): Promise<GetInstitutesByAdminId.Result>;
}

export namespace GetInstitutesByAdminId {
  export type Params = { id: number };
  export type Result = InstituteModel[] | undefined;
}
