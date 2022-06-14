import { GetInstitutesRepository } from '@/data/protocols/repositories/institute';
import { GetInstitutes } from '@/domain/usecases/institute';

export class RemoteGetInstitutes implements GetInstitutes {
  constructor(
    private readonly getInstitutesRepository: GetInstitutesRepository
  ) {}
  async perform(): Promise<GetInstitutes.Result> {
    const institutes = await this.getInstitutesRepository.getInstitutes();
    if (institutes) {
      return institutes;
    } else {
      return undefined;
    }
  }
}
