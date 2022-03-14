import { getCustomRepository } from "typeorm";
import ServiceRepository from "../../repositories/ServiceRepository";

type ServiceRequest = {
    id: string,
    description: string,
}

export class UpdateServiceService {
    async execute({ id, description } : ServiceRequest) {
        const serviceRepository = getCustomRepository(ServiceRepository);
        
        const service = await serviceRepository.findOne({ id });
        if(!service) {
            return new Error("Service does not exists!");
        }
        
        service.description = description ? description : service.description;

        await serviceRepository.save(service);
                
        return service;
    }   
}