import { getCustomRepository } from "typeorm"
import RealStateRepository from "../../repositories/RealStateRepository"
import StatusRepostitory from "../../repositories/StatusRepository"

type RealStateRequest = {
    id: string,
    name?: string,
    id_gr?: string,
    id_status?: string
};

export class UpdateRealStateService {
    async execute({ id, name, id_gr, id_status }: RealStateRequest) {
        const real_stateRepository = getCustomRepository(RealStateRepository);
        const statusRepository = getCustomRepository(StatusRepostitory);

        if(id_status) {
            const status = await statusRepository.findOne(id_status); 

            if(!status) {
                return new Error("Status does not exists!");
            }
        }
        
        const real_state = await real_stateRepository.findOne(id);

        if(!real_state) {
            return new Error("Real State does not exists!");
        }
        
        real_state.name = name ? name : real_state.name;
        real_state.id_gr = id_gr ? id_gr : real_state.id_gr;
        real_state.id_status = id_status ? id_status : real_state.id_status;
        real_state.updated_At = new Date();
        
        await real_stateRepository.save(real_state);
        
        return real_state;
    }
}