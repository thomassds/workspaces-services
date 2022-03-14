import { getCustomRepository } from "typeorm";
import ServiceRepository from "../../repositories/ServiceRepository";


export class GetAllServiceService {
    async execute() {
        const serviceRepository = getCustomRepository(ServiceRepository);

        const services = await serviceRepository.find();
                        
        return services;
    }   
}