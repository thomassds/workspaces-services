import { getRepository } from "typeorm";
import { Status } from "../../entities/Status";

export class GetOneStatusService {
    async execute(id: string) {
        const repo = getRepository(Status);

        const status = await repo.findOne(id);

        return status;
    }
}