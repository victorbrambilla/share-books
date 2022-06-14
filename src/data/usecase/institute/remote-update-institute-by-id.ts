import { UpdateInstituteByIdRepository } from '@/data/protocols/repositories/institute';
import { UpdateInstituteById } from '@/domain/usecases/institute';

export class RemoteUpdateInstituteById implements UpdateInstituteById {
  constructor(
    private readonly updateInstituteByIdRepository: UpdateInstituteByIdRepository
  ) {}
  async perform(
    params: UpdateInstituteById.Params
  ): Promise<UpdateInstituteById.Result> {
    const instituteUpdated =
      await this.updateInstituteByIdRepository.updateById(params);
    return instituteUpdated;
  }
}
