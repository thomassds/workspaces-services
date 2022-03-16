import { getCustomRepository, getRepository } from "typeorm";
import { User } from "../../entities/User";
import StatusRepostitory from "../../repositories/StatusRepository";

import WorkspaceRepository from "../../repositories/WorkspaceRepository";


export class GetPendingWorkspaceService {
    async execute() {
        const workspace_repository = getCustomRepository(WorkspaceRepository);
        const status_repository = getCustomRepository(StatusRepostitory);

        const status = await status_repository.findOne({ description: "Pendente" });
        if(!status) {
            return new Error("Status does not exists!");
        }

        const workspace = await workspace_repository.find({
            where: { id_status: status.id },
            relations: ["status", "user", "type", "real_state", "service"],
            select: ["description", "start_time", "finish_time", ]
        });

        return workspace;
    }   
}