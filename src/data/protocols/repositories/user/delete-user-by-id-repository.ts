import { DeleteUserById } from '@/domain/usecases/user';

export interface DeleteUserByIdRepository {
  deleteById: (
    params: DeleteUserByIdRepository.Params
  ) => Promise<DeleteUserByIdRepository.Result>;
}
export namespace DeleteUserByIdRepository {
  export type Params = DeleteUserById.Params;
  export type Result = DeleteUserById.Result;
}
