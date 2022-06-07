import { UpdateUserPassword } from '@/domain/usecases';
import { PrismaClient } from '@prisma/client';

export class RemoteUpdateUserPassword implements UpdateUserPassword {
  constructor(private readonly prisma: PrismaClient) {}

  async update(
    user: UpdateUserPassword.Params
  ): Promise<UpdateUserPassword.Model> {
    const updatedUser = await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: user.password,
      },
    });
    return updatedUser;
  }
}
