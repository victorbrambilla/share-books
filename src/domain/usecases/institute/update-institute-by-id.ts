import { InstituteModel } from '@/domain/models';

export interface UpdateInstituteById {
  update(
    id: number,
    institute: UpdateInstituteById.Params
  ): Promise<UpdateInstituteById.Model>;
}
export namespace UpdateInstituteById {
  export type Params = {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    adminId?: number;
  };
  export type Model = InstituteModel;
}
