import { getCustomRepository, getRepository } from "typeorm";
import { Status } from "../../entities/Status";
import StatusRepostitory from "../../repositories/StatusRepository";

export class GetOneStatusService {
    async execute(id: string) {
        const statusRepository = getCustomRepository(StatusRepostitory);

        const status = await statusRepository.findOne(id);

        return status;
    }
}