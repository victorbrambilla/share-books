import {
  DeleteInstituteByIdRepository,
  GetInstitutesByAdminIdRepository,
  GetInstitutesRepository,
  RegisterInstituteRepository,
  UpdateInstituteByIdRepository,
} from '@/data/protocols/repositories/institute';
import { PrismaClient } from '@prisma/client';

export class InstitutesRepository
  implements
    GetInstitutesRepository,
    GetInstitutesByAdminIdRepository,
    RegisterInstituteRepository,
    UpdateInstituteByIdRepository,
    DeleteInstituteByIdRepository
{
  constructor(private readonly prisma: PrismaClient) {}

  async getInstitutes(): Promise<GetInstitutesRepository.Result> {
    const institutes = await this.prisma.institute.findMany();
    return institutes;
  }

  async getById(
    params: GetInstitutesByAdminIdRepository.Params
  ): Promise<GetInstitutesByAdminIdRepository.Result> {
    const institutes = await this.prisma.institute.findFirst({
      where: {
        adminId: params.id,
      },
    });
    if (institutes) {
      return institutes;
    } else {
      return undefined;
    }
  }

  async register(
    params: RegisterInstituteRepository.Params
  ): Promise<RegisterInstituteRepository.Result> {
    const newInstitute = await this.prisma.institute.create({
      data: params,
    });
    return newInstitute;
  }

  async updateById(
    params: UpdateInstituteByIdRepository.Params
  ): Promise<UpdateInstituteByIdRepository.Result> {
    const instituteUpdated = await this.prisma.institute.update({
      where: { id: params.instituteId },
      data: params.institute,
    });
    return instituteUpdated;
  }

  async deleteById(
    params: DeleteInstituteByIdRepository.Params
  ): Promise<DeleteInstituteByIdRepository.Result> {
    const instituteDeleted = await this.prisma.institute.delete({
      where: { id: params.instituteId },
    });
    return instituteDeleted;
  }
}
