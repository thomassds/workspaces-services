import { getCustomRepository } from "typeorm";
import ServiceRepository from "../../repositories/ServiceRepository";
import SubServiceRepository from "../../repositories/SubServiceRepository";

type SubServiceRequest = {
    description: string,
    id_service: string
}

export class CreateSubServiceService {
    async execute({ id_service, description } : SubServiceRequest) {
        const sub_service_repository = getCustomRepository(SubServiceRepository);
        const service_repository = getCustomRepository(ServiceRepository);

        if(!description || description == "") {
            return new Error("Description cannot be null");
        }

        if(await sub_service_repository.findOne({ id_service, description } )) {
            return new Error("Sub Service already exists!");
        }

        if(!(await service_repository.findOne(id_service))) {
            return new Error("Service does not exists!");
        }

        const sub_service = sub_service_repository.create({ id_service, description });

        await sub_service_repository.save(sub_service);

        return sub_service;
    }   
}