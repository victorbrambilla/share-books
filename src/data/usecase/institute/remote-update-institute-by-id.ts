import { UpdateInstituteById } from '@/domain/usecases';
import { PrismaClient } from '@prisma/client';

export class RemoteUpdateInstituteById implements UpdateInstituteById {
  constructor(private readonly prisma: PrismaClient) {}

  async update(
    id: number,
    institute: UpdateInstituteById.Params
  ): Promise<UpdateInstituteById.Model> {
    const updatedInstitute = await this.prisma.institute.update({
      where: { id },
      data: institute,
    });
    return updatedInstitute;
  }
}
