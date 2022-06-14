import { UserModel } from '@/domain/models';

export interface UpdateUserPassword {
  perform(user: UpdateUserPassword.Params): Promise<UpdateUserPassword.Result>;
}

export namespace UpdateUserPassword {
  export type Params = {
    id: number;
    password: string;
  };
  export type Result = UserModel;
}
