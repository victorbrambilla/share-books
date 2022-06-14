import { GetUserByIdRepository } from '@/data/protocols/repositories/user/';
import { GetUserById } from '@/domain/usecases/user';

export class RemoteGetUserById implements GetUserById {
  constructor(private readonly getUserByIdRepository: GetUserByIdRepository) {}
  async perform(params: GetUserById.Params): Promise<GetUserById.Result> {
    const user = await this.getUserByIdRepository.getById(params);
    return user;
  }
}
