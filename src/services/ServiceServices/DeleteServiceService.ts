import { getCustomRepository } from "typeorm";
import ServiceRepository from "../../repositories/ServiceRepository";

export class DeleteServiceService {
    async execute(id: string) {
        const serviceRepository = getCustomRepository(ServiceRepository);
        
        const service = await serviceRepository.findOne({ id });
        if(!service) {
            return new Error("Service does not exists!");
        }
        
        await serviceRepository.delete({id});
                
        return service;
    }   
}