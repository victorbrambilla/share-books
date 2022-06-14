import { UserModel } from '@/domain/models';

export interface DeleteUserById {
  perform(params: DeleteUserById.Params): Promise<DeleteUserById.Result>;
}
export namespace DeleteUserById {
  export type Params = {
    userId: number;
  };
  export type Result = UserModel;
}
