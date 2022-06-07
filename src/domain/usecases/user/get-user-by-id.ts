import { UserModel } from '@/domain/models';

export interface GetUserById {
  get(id: number): Promise<GetUserById.Model>;
}

export namespace GetUserById {
  export type Model = UserModel | undefined;
}
