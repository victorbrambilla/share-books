import { InstituteModel } from '@/domain/models';

export interface GetInstitutesByAdminId {
  get(id: number): Promise<GetInstitutesByAdminId.Model>;
}

export namespace GetInstitutesByAdminId {
  export type Model = InstituteModel[] | undefined;
}
