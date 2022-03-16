import { getCustomRepository } from "typeorm";
import WorkspaceRepository from "../../repositories/WorkspaceRepository";

export class DeleteWorkspaceService {
    async execute(id: string) {
        const workspace_repository = getCustomRepository(WorkspaceRepository);

        const workspace = await workspace_repository.findOne(id)
        if(!workspace) {
            return new Error("Workspace does not exists!");
        }

        await workspace_repository.delete(id);
    }
}