import { getCustomRepository } from "typeorm";
import ServiceRepository from "../../repositories/ServiceRepository";

type ServiceRequest = {
    description: string,
}

export class CreateServiceService {
    async execute({ description } : ServiceRequest) {
        const serviceRepository = getCustomRepository(ServiceRepository);
        
        if(await serviceRepository.findOne({ description })) {
            return new Error("Service already exists!");
        }

        const service = await serviceRepository.createService({ description })
        
        await serviceRepository.save(service);
                
        return service;
    }   
}