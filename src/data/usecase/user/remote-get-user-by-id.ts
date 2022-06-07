import { GetUserById } from '@/domain/usecases';
import { PrismaClient } from '@prisma/client';

export class RemoteGetUserById implements GetUserById {
  constructor(private readonly prisma: PrismaClient) {}

  async get(id: number): Promise<GetUserById.Model> {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });
    if (user) {
      return user;
    } else {
      return undefined;
    }
  }
}
