import { getCustomRepository, getRepository } from "typeorm";
import StatusRepostitory from "../../repositories/StatusRepository";

export class GetAllStatusService {
    async execute() {
        const statusRepository = getCustomRepository(StatusRepostitory);

        const status = await statusRepository.find();

        return status;
    }
}