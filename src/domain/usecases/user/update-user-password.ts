import { UserModel } from '@/domain/models';

export interface UpdateUserPassword {
  update(user: UpdateUserPassword.Params): Promise<UpdateUserPassword.Model>;
}

export namespace UpdateUserPassword {
  export type Params = {
    id: number;
    password: string;
  };
  export type Model = UserModel;
}
