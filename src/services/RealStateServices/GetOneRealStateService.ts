import { getCustomRepository, getRepository } from "typeorm";
import RealStateRepository from "../../repositories/RealStateRepository";

export class GetOneRealStateService {
    async execute(id: string) {
        const real_state_repository = getCustomRepository(RealStateRepository);

        const real_state = real_state_repository.findOne(id);

        if(!real_state) {
            return new Error("Real State does not exists!");
        }

        return real_state;
    }
}