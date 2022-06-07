import { UserModel } from '@/domain/models';

export interface RegisterUser {
  register(user: RegisterUser.Params): Promise<RegisterUser.Model>;
}

export namespace RegisterUser {
  export type Params = {
    name: string;
    email: string;
    password: string;
    userName: string;
  };

  export type Model = UserModel;
}
