import { InstituteModel } from '@/domain/models';

export interface RegisterInstitute {
  register(
    institute: RegisterInstitute.Params
  ): Promise<RegisterInstitute.Model>;
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
  export type Model = InstituteModel;
}
