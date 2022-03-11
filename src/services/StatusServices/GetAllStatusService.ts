import { getRepository } from "typeorm";
import { Status } from "../../entities/Status";

export class GetAllStatusService {
    async execute() {
        const repo = getRepository(Status);

        const status = await repo.find();

        return status;
    }
}