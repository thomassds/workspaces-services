import { getCustomRepository, getRepository } from "typeorm";
import RealStateRepository from "../../repositories/RealStateRepository";
import ServiceRepository from "../../repositories/ServiceRepository";
import StatusRepostitory from "../../repositories/StatusRepository";
import TypeRepository from "../../repositories/TypeRepository";
import UserRepostitory from "../../repositories/UserRepository";

import WorkspaceRepository from "../../repositories/WorkspaceRepository";

type WorkspaceRequest = {
    id: string,
    description: string,
    id_user: string,
    id_real_state: string,
    id_type: string,
    id_status: string,
    id_service: string,
    start_time?: Date,
    finish_time?: Date
}

export class UpdateWorkspaceService {
    async execute({ id, description, id_user, id_real_state, id_type, id_status, id_service, start_time, finish_time }: WorkspaceRequest) {
        const workspace_repository = getCustomRepository(WorkspaceRepository);
        const status_repository = getCustomRepository(StatusRepostitory);
        const type_repository = getCustomRepository(TypeRepository);
        const real_state_repository = getCustomRepository(RealStateRepository);
        const user_repository = getCustomRepository(UserRepostitory);
        const service_repository = getCustomRepository(ServiceRepository);

        const workspace = await workspace_repository.findOne(id,{
            relations: ["status"]
        });

        if(!workspace) {
            return new Error("Workspace does not exists!");
        }

        if(workspace.status.description == "Pendente") {
            return new Error("Workspace cannot be updated")
        }

        if(id_status) {
            if(!(await status_repository.findOne({id: id_status}))){
                return new Error("Status does not exists!");
            }
        }
        
        if(id_type) {
            if(!(await type_repository.findOne({id: id_type}))) {
                return new Error("Type does not exists!");
            }
        }

        if(id_real_state) {
            if(!(await real_state_repository.findOne({ id: id_real_state }))) {
                return new Error("Real State does not exists!");
            }
        }

        if(id_user) {
            if(!(await user_repository.findOne({id: id_user}))) {
                return new Error("User does not exists!");
            }
        }

        if(id_service) {
            if(!(await service_repository.findOne({id: id_service}))) {
                return new Error("Service does not exists!");
            }
        }

        workspace.description = description ? description : workspace.description;
        workspace.id_user = id_user ? id_user : workspace.id_user;
        workspace.id_real_state = id_real_state ? id_real_state : workspace.id_real_state;
        workspace.id_type = id_type ? id_type : workspace.id_type;
        workspace.id_status = id_status ? id_status : workspace.id_status;
        workspace.id_service = id_service ? id_service : workspace.id_service;
        workspace.start_time = start_time ? start_time : workspace.start_time;
        workspace.finish_time = finish_time ? finish_time : workspace.finish_time;

        await workspace_repository.save(workspace);

        return workspace;
    }   
}