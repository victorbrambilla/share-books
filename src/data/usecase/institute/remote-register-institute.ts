import { RegisterInstitute } from '@/domain/usecases';
import { PrismaClient } from '@prisma/client';

export class RemoteRegisterInstitute implements RegisterInstitute {
  constructor(private readonly prisma: PrismaClient) {}
  async register(
    institute: RegisterInstitute.Params
  ): Promise<RegisterInstitute.Model> {
    const newInstitute = await this.prisma.institute.create({
      data: institute,
    });
    return newInstitute;
  }
}
