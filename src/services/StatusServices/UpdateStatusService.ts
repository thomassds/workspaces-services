import { getRepository } from "typeorm";
import { Status } from "../../entities/Status";

type StatusUpdateRequest = {
    id: string,
    description: string
};

export class UpdateStatusService {
    async execute({ id, description }: StatusUpdateRequest) {
        const repo = getRepository(Status);

        const status = await repo.findOne(id);

        if(!status) {
            return new Error("Status does not exists!");
        }

        status.description = description ? description : status.description;

        await repo.save(status);

        return status;
    }
}