import { EntityRepository, Repository } from "typeorm";
import { Workspace } from "../entities/Workspace";

type WorkspaceRequest = {
    id?: string,
    description: string, 
    id_user: string, 
    id_status: string,
    id_type: string,
    id_service: string,
    id_real_state: string
    start_time?: Date,
    finish_time?: Date
}

@EntityRepository(Workspace)
export default class WorkspaceRepository extends Repository<Workspace> {
    async createWorkspace({ id, description, id_user, id_status, id_type, id_service, id_real_state, start_time, finish_time }: WorkspaceRequest) : Promise<WorkspaceRequest>{
        return this.create({
            id, description, id_user, id_status, id_type, id_service, id_real_state, start_time, finish_time
        })
    }

    async saveWorkspace(workspace: Workspace) : Promise<Workspace>{
        return this.save(workspace);
    }
}