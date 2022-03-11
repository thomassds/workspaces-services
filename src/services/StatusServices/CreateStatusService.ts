import { getRepository } from "typeorm";
import { Status } from "../../entities/Status";

type StatusRequest = {
    description: string
}

export class CreateStatusService {
    async execute({ description }:StatusRequest): Promise<Status | Error> {
        const repo = getRepository(Status);

        if(await repo.findOne({description})) {
            return new Error("Status already exists");
        }

        const status = repo.create({
            description
        });
    
        await repo.save(status);

        return status;
    }
}