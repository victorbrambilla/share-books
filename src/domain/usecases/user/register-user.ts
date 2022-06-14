import { UserModel } from '@/domain/models';

export interface RegisterUser {
  perform(user: RegisterUser.Params): Promise<RegisterUser.Result>;
}

export namespace RegisterUser {
  export type Params = {
    name: string;
    email: string;
    password: string;
    userName: string;
  };

  export type Result = UserModel;
}
