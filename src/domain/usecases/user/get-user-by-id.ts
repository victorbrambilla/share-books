import { UserModel } from '@/domain/models';

export interface GetUserById {
  perform(params: GetUserById.Params): Promise<GetUserById.Result>;
}

export namespace GetUserById {
  export type Params = { id: number };
  export type Result = UserModel | null;
}
