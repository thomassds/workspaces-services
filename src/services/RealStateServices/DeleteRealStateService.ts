import { getCustomRepository } from "typeorm"
import RealStateRepository from "../../repositories/RealStateRepository"

export class DeleteRealStateService {
    async execute(id: string) {
        const real_stateRepository = getCustomRepository(RealStateRepository);

        const real_state = await real_stateRepository.findOne(id);
        if(!real_state) {
            return new Error("Real State does not exists!");
        }

        await real_stateRepository.delete(id);

        return real_state;
    }
}