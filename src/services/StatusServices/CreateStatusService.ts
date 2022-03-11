import { getRepository, getCustomRepository } from "typeorm";
import { Status } from "../../entities/Status";
import StatusRepostitory from "../../repositories/StatusRepository";

type StatusRequest = {
    description: string
}

export class CreateStatusService {
    async execute({ description }:StatusRequest): Promise<Status | Error> {
        const statusRepository = getCustomRepository(StatusRepostitory);

        if(await statusRepository.findOne({description})) {
            return new Error("Status already exists");
        }

        const status = statusRepository.create({
            description
        });
    
        await statusRepository.save(status);

        return status;
    }
}