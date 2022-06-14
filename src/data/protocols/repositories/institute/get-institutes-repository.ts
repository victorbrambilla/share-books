import { GetInstitutes } from '@/domain/usecases';

export interface GetInstitutesRepository {
  getInstitutes: () => Promise<GetInstitutesRepository.Result>;
}

export namespace GetInstitutesRepository {
  export type Result = GetInstitutes.Result;
}
