import { RegisterInstituteRepository } from '@/data/protocols/repositories/institute';
import { RegisterInstitute } from '@/domain/usecases/institute';

export class RemoteRegisterInstitute implements RegisterInstitute {
  constructor(
    private readonly registerInstituteRepository: RegisterInstituteRepository
  ) {}
  async perform(
    params: RegisterInstitute.Params
  ): Promise<RegisterInstitute.Result> {
    const institute = await this.registerInstituteRepository.register(params);
    return institute;
  }
}
