import { UpdateInstituteById } from '@/domain/usecases/institute';

export interface UpdateInstituteByIdRepository {
  updateById(
    params: UpdateInstituteByIdRepository.Params
  ): Promise<UpdateInstituteByIdRepository.Result>;
}
export namespace UpdateInstituteByIdRepository {
  export type Params = UpdateInstituteById.Params;
  export type Result = UpdateInstituteById.Result;
}
