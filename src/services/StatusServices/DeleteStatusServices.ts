import { getCustomRepository, getRepository } from "typeorm";

import { Status } from "../../entities/Status";

import StatusRepostitory from "../../repositories/StatusRepository";

export class DeleteStatusService {
    async execute(id: string) {
        const statusRepository = getCustomRepository(StatusRepostitory);

        const status = await statusRepository.findOne(id)
        if(!status) {
            return new Error("Status does not exists!");
        }

        await statusRepository.delete(id);
    }
}