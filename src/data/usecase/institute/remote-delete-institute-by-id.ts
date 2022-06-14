import { DeleteInstituteByIdRepository } from '@/data/protocols/repositories/institute';
import { DeleteInstituteById } from '@/domain/usecases/institute';

export class RemoteDeleteInstituteById implements DeleteInstituteById {
  constructor(
    private readonly instituteRepository: DeleteInstituteByIdRepository
  ) {}

  async perform(
    params: DeleteInstituteById.Params
  ): Promise<DeleteInstituteById.Result> {
    return this.instituteRepository.deleteById(params);
  }
}
