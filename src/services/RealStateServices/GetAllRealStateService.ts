import { getCustomRepository, getRepository } from "typeorm";
import RealStateRepository from "../../repositories/RealStateRepository";

export class GetAllRealStateService {
    async execute() {
        const real_state_repository = getCustomRepository(RealStateRepository);

        const real_states = await real_state_repository.find({
            relations: ["status"],
            select: ["id", "name", "id_gr"]
        });
        
        return real_states;
    }
}