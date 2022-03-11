import { getRepository } from "typeorm";
import { Status } from "../../entities/Status";

export class DeleteStatusService {
    async execute(id: string) {
        const repo = getRepository(Status);

        if(!(await repo.findOne(id))) {
            return new Error("Status does not exists!");
        }

        await repo.delete(id);
    }
}