import { InstituteModel } from '@/domain/models';

export interface GetInstitutes {
  get(): Promise<GetInstitutes.Model>;
}

export namespace GetInstitutes {
  export type Model = InstituteModel[] | undefined;
}
