import { getCustomRepository, getRepository } from "typeorm";
import ServiceRepository from "../../repositories/ServiceRepository";
import SubServiceRepository from "../../repositories/SubServiceRepository";

type SubServiceRequest = {
    id: string,
    description: string,
    id_service: string
}
export class UpdateSubServiceService {
    async execute({ id, description, id_service }: SubServiceRequest) {
        const sub_service_repository = getCustomRepository(SubServiceRepository);
        const service_repository = getCustomRepository(ServiceRepository);

        if(!description) {
            return new Error("Description cannot be null");
        }

        if(!id_service) {
            return new Error("Id Service cannot be null");
        }

        const sub_service = await sub_service_repository.findOne(id);
        if(!sub_service) {
            return new Error("Sub Service does not exists!");
        }

        if(sub_service.id_service !== id_service) {
            if(!(await service_repository.findByIdService(id_service))) {
                return new Error("Service does not exists!");
            }
        }
        
        
        if(await sub_service_repository.findOne({ id_service, description })) {
            return new Error("Sub Service Already exists!");
        }
        
        
        sub_service.id_service = id_service;
        sub_service.description = description;
        sub_service.updated_At = new Date();

        await sub_service_repository.save(sub_service);
        
        return sub_service;
    }
}