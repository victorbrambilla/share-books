import { RegisterUser } from '@/domain/usecases';
import { PrismaClient } from '@prisma/client';

export class RemoteRegisterUser implements RegisterUser {
  constructor(private readonly prisma: PrismaClient) {}

  async register(user: RegisterUser.Params): Promise<RegisterUser.Model> {
    const newUser = await this.prisma.user.create({
      data: user,
    });
    return newUser;
  }
}
