import { DeleteUserByIdRepository } from '@/data/protocols/repositories/user';
import { DeleteUserById } from '@/domain/usecases/user';

export class RemoteDeleteUserById implements DeleteUserById {
  constructor(
    private readonly deleteUserByIdUserRepository: DeleteUserByIdRepository
  ) {}

  async perform(params: DeleteUserById.Params): Promise<DeleteUserById.Result> {
    return this.deleteUserByIdUserRepository.deleteById(params);
  }
}
