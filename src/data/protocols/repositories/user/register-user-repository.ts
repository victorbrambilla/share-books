import { RegisterUser } from '@/domain/usecases/user';

export interface RegisterUserRepository {
  register(
    params: RegisterUserRepository.Params
  ): Promise<RegisterUserRepository.Result>;
}
export namespace RegisterUserRepository {
  export type Params = RegisterUser.Params;
  export type Result = RegisterUser.Result;
}
