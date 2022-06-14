import { UpdateUserPassword } from '@/domain/usecases/user';

export interface UpdateUserPasswordRepository {
  updatePasswordById(
    params: UpdateUserPasswordRepository.Params
  ): Promise<UpdateUserPasswordRepository.Result>;
}
export namespace UpdateUserPasswordRepository {
  export type Params = UpdateUserPassword.Params;
  export type Result = UpdateUserPassword.Result;
}
