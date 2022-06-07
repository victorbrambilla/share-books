import { GetInstitutesByAdminId } from '@/domain/usecases';
import { PrismaClient } from '@prisma/client';

export class RemoteGetInstitutesByAdminId implements GetInstitutesByAdminId {
  constructor(private readonly prisma: PrismaClient) {}
  async get(id: number): Promise<GetInstitutesByAdminId.Model> {
    const institutes = await this.prisma.institute.findMany({
      where: {
        adminId: id,
      },
    });
    if (institutes.length > 0) {
      return institutes;
    } else {
      return undefined;
    }
  }
}
