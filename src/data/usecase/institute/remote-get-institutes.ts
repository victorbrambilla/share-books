import { GetInstitutes } from '@/domain/usecases';
import { PrismaClient } from '@prisma/client';

export class RemoteGetInstitutes implements GetInstitutes {
  constructor(private readonly prisma: PrismaClient) {}
  async get(): Promise<GetInstitutes.Model> {
    const institutes = await this.prisma.institute.findMany();
    if (institutes.length > 0) {
      return institutes;
    } else {
      return undefined;
    }
  }
}
