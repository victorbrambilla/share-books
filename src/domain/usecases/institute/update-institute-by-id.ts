import { InstituteModel } from '@/domain/models';

export interface UpdateInstituteById {
  perform(
    institute: UpdateInstituteById.Params
  ): Promise<UpdateInstituteById.Result>;
}
export namespace UpdateInstituteById {
  export type Params = {
    instituteId: number;
    institute: institute;
  };
  export type institute = {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    adminId: number;
  };
  export type Result = InstituteModel;
}
