import { GetUserById } from '@/domain/usecases/user/get-user-by-id';

export interface GetUserByIdRepository {
  getById(
    params: GetUserByIdRepository.Params
  ): Promise<GetUserByIdRepository.Result>;
}
export namespace GetUserByIdRepository {
  export type Params = GetUserById.Params;
  export type Result = GetUserById.Result;
}
