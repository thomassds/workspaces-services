import { getCustomRepository } from "typeorm";
import ServiceRepository from "../../repositories/ServiceRepository";


export class GetOneServiceService {
    async execute(id: string) {
        const serviceRepository = getCustomRepository(ServiceRepository);

        const service = await serviceRepository.findOne(id);
        if(!service) {
            return new Error("Service does not exists!");
        }   

        return service;
    }   
}