import { getCustomRepository } from "typeorm";
import RealStateRepository from "../../repositories/RealStateRepository";
import StatusRepostitory from "../../repositories/StatusRepository";

type RealStateRequest = {
    name: string,
    id_gr: string,
    id_status: string
}

export class CreateRealStateServie {
    async execute({ name, id_gr, id_status } : RealStateRequest) {
        const real_stateRepository = getCustomRepository(RealStateRepository);
        const statusRepository = getCustomRepository(StatusRepostitory);

        if(!await statusRepository.findByIdStatus(id_status)) {
            return new Error("Status does not exists!");
        }   

        const real_state = real_stateRepository.create({ 
            name,
            id_gr,
            id_status
        })

        await real_stateRepository.save(real_state);
                
        return real_state;
    }   
}