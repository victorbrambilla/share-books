import { InstituteModel } from '@/domain/models';

export interface GetInstitutes {
  perform(): Promise<GetInstitutes.Result>;
}

export namespace GetInstitutes {
  export type Result = InstituteModel[] | undefined;
}
