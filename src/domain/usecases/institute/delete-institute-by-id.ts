import { InstituteModel } from '@/domain/models';

export interface DeleteInstituteById {
  perform(
    params: DeleteInstituteById.Params
  ): Promise<DeleteInstituteById.Result>;
}
export namespace DeleteInstituteById {
  export type Params = {
    instituteId: number;
  };
  export type Result = InstituteModel;
}
