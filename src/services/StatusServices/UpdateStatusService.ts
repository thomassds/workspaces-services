import { getCustomRepository, getRepository } from "typeorm";
import StatusRepostitory from "../../repositories/StatusRepository";

type StatusUpdateRequest = {
    id: string,
    description: string
};

export class UpdateStatusService {
    async execute({ id, description }: StatusUpdateRequest) {
        const statusRepository = getCustomRepository(StatusRepostitory);

        const status = await statusRepository.findOne(id);

        if(!status) {
            return new Error("Status does not exists!");
        }

        status.description = description ? description : status.description;
        status.updated_At = new Date();

        await statusRepository.save(status);

        return status;
    }
}