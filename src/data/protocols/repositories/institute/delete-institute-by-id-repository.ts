import { DeleteInstituteById } from '@/domain/usecases/institute';

export interface DeleteInstituteByIdRepository {
  deleteById: (
    params: DeleteInstituteByIdRepository.Params
  ) => Promise<DeleteInstituteByIdRepository.Result>;
}
export namespace DeleteInstituteByIdRepository {
  export type Params = DeleteInstituteById.Params;
  export type Result = DeleteInstituteById.Result;
}
