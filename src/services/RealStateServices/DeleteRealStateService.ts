import { getCustomRepository } from "typeorm"
import RealStateRepository from "../../repositories/RealStateRepository"

export class DeleteRealStateService {
    async execute(id: string) {
        const real_state_repository = getCustomRepository(RealStateRepository);

        const real_state = await real_state_repository.findOne(id);
        if(!real_state) {
            return new Error("Real State does not exists!");
        }

        await real_state_repository.delete(id);

        return real_state;
    }
}