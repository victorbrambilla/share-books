import { InstituteModel } from '@/domain/models';

export interface RegisterInstitute {
  perform(
    institute: RegisterInstitute.Params
  ): Promise<RegisterInstitute.Result>;
}
export namespace RegisterInstitute {
  export type Params = {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    adminId: number;
  };
  export type Result = InstituteModel;
}
