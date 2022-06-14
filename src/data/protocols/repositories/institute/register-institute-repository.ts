import { RegisterInstitute } from '@/domain/usecases';

export interface RegisterInstituteRepository {
  register: (
    params: RegisterInstituteRepository.Params
  ) => Promise<RegisterInstituteRepository.Result>;
}
export namespace RegisterInstituteRepository {
  export type Params = RegisterInstitute.Params;
  export type Result = RegisterInstitute.Result;
}
