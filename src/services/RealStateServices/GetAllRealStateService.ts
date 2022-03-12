import { getCustomRepository, getRepository } from "typeorm";
import RealStateRepository from "../../repositories/RealStateRepository";

export class GetAllRealStateService {
    async execute() {
        const real_stateRepository = getCustomRepository(RealStateRepository);

        const real_states = await real_stateRepository.find({
            relations: ["status"],
            select: ["id", "name", "id_gr"]
        });
        
        return real_states;
    }
}