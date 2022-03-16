import { getCustomRepository, getRepository } from "typeorm";
import { User } from "../../entities/User";

import WorkspaceRepository from "../../repositories/WorkspaceRepository";


export class GetOneWorkspaceService {
    async execute(id: string) {
        const workspace_repository = getCustomRepository(WorkspaceRepository);
        
        const workspace = await workspace_repository.findOne(id, {
            relations: ["status", "user", "type", "real_state", "service"],
            select: ["description", "start_time", "finish_time", ]
        });

        return workspace;
    }   
}