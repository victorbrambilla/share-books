import { RegisterUserRepository } from '@/data/protocols/repositories/user';
import { RegisterUser } from '@/domain/usecases/user';

export class RemoteRegisterUser implements RegisterUser {
  constructor(
    private readonly registerUserRepository: RegisterUserRepository
  ) {}
  async perform(params: RegisterUser.Params): Promise<RegisterUser.Result> {
    const user = await this.registerUserRepository.register(params);
    return user;
  }
}
