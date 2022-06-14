import { UpdateUserPassword } from '@/domain/usecases/user';
import { UpdateUserPasswordRepository } from '@/data/protocols/repositories/user';
export class RemoteUpdateUserPassword implements UpdateUserPassword {
  constructor(
    private readonly updateUserPasswordRepository: UpdateUserPasswordRepository
  ) {}
  async perform(
    params: UpdateUserPassword.Params
  ): Promise<UpdateUserPassword.Result> {
    const userUpdated =
      await this.updateUserPasswordRepository.updatePasswordById(params);
    return userUpdated;
  }
}
