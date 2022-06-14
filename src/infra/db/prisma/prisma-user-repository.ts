import {
  GetUserByIdRepository,
  RegisterUserRepository,
  UpdateUserPasswordRepository,
} from '@/data/protocols/repositories/user';
import { PrismaClient } from '@prisma/client';

export class UserRepository
  implements
    GetUserByIdRepository,
    RegisterUserRepository,
    UpdateUserPasswordRepository
{
  constructor(private readonly prisma: PrismaClient) {}

  async getById(
    params: GetUserByIdRepository.Params
  ): Promise<GetUserByIdRepository.Result> {
    const { id } = params;
    const user = await this.prisma.user.findFirst({
      where: { id },
    });
    return user;
  }

  async register(
    params: RegisterUserRepository.Params
  ): Promise<RegisterUserRepository.Result> {
    const user = await this.prisma.user.create({
      data: params,
    });
    return user;
  }

  async updatePasswordById(
    params: UpdateUserPasswordRepository.Params
  ): Promise<UpdateUserPasswordRepository.Result> {
    const { id, password } = params;
    const user = await this.prisma.user.update({
      where: { id },
      data: { password },
    });
    return user;
  }
}
