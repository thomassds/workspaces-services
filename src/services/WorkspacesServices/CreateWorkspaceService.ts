import { getCustomRepository, getRepository } from "typeorm";
import RealStateRepository from "../../repositories/RealStateRepository";
import ServiceRepository from "../../repositories/ServiceRepository";
import StatusRepostitory from "../../repositories/StatusRepository";
import TypeRepository from "../../repositories/TypeRepository";
import UserRepostitory from "../../repositories/UserRepository";
import WorkspaceRepository from "../../repositories/WorkspaceRepository";

type WorkspaceRequest = {
    description: string,
    id_user: string,
    id_real_state: string,
    id_type: string,
    id_status: string,
    id_service: string,
    start_time?: Date,
    finish_time?: Date
}

export class CreateWorkspaceService {
    async execute({ description, id_user, id_real_state, id_type, id_status, id_service}:WorkspaceRequest) {
        const workspace_repository = getCustomRepository(WorkspaceRepository);
        const user_repository = getCustomRepository(UserRepostitory);
        const real_state_repository = getCustomRepository(RealStateRepository);
        const type_repository = getCustomRepository(TypeRepository);
        const status_repository = getCustomRepository(StatusRepostitory);
        const service_repository = getCustomRepository(ServiceRepository); 

        const user = await user_repository.findOne({id: id_user});
        if(!user) {
            return new Error("User does not exists");
        }
        
        const real_state = await real_state_repository.findOne({id: id_real_state});
        if(!real_state) {
            return new Error("Real State does not exists");
        }

        const type = await type_repository.findOne({id: id_type });
        if(!type) {
            return new Error("Type does not exists");
        }

        const status = status_repository.findOne({id: id_status});
        if(!status) {
            return new Error("Status does not exists");
        }

        const service = service_repository.findOne({id: id_service});
        if(!service) {
            return new Error("Service does not exists");
        }

        const workspace = workspace_repository.create({
            description, id_user, id_real_state, id_type, id_status, id_service, start_time: new Date() 
        })
        
        await workspace_repository.save(workspace);
        
        return workspace;
    }   
}