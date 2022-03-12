import { getCustomRepository, getRepository } from "typeorm";
import RealStateRepository from "../../repositories/RealStateRepository";

export class GetOneRealStateService {
    async execute(id: string) {
        const real_stateRepository = getCustomRepository(RealStateRepository);

        const real_state = real_stateRepository.findOne(id);

        if(!real_state) {
            return new Error("Real State does not exists!");
        }

        return real_state;
    }
}