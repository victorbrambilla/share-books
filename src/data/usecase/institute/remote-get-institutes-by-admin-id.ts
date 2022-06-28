import { GetInstitutesByAdminIdRepository } from '@/data/protocols/repositories/institute';
import { GetInstitutesByAdminId } from '@/domain/usecases/institute';

export class RemoteGetInstitutesByAdminId implements GetInstitutesByAdminId {
  constructor(
    private readonly getInstitutesByAdminIdRepository: GetInstitutesByAdminIdRepository
  ) {}
  async perform(
    params: GetInstitutesByAdminId.Params
  ): Promise<GetInstitutesByAdminId.Result> {
    const institutes = await this.getInstitutesByAdminIdRepository.getById(
      params
    );

    return institutes;
  }
}
