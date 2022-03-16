import { getCustomRepository, getRepository } from "typeorm";
import StatusRepostitory from "../../repositories/StatusRepository";
import SubServiceRepository from "../../repositories/SubServiceRepository";
import TaskRepository from "../../repositories/TaskRepository";
import TypeRepository from "../../repositories/TypeRepository";
import UserRepostitory from "../../repositories/UserRepository";

type TaskRequest = {
    description: string,
    id_status: string,
    id_type: string,
    id_sub_service: string,
    id_user: string,
    depends_on?: string
}

export class CreateTaskService {
    async execute({ description, id_status, id_type, id_sub_service, id_user, depends_on } : TaskRequest) {
        const task_repository = getCustomRepository(TaskRepository);
        const status_repository = getCustomRepository(StatusRepostitory);
        const type_repository = getCustomRepository(TypeRepository);
        const sub_service_repository = getCustomRepository(SubServiceRepository);
        const user_repository = getCustomRepository(UserRepostitory);

        if(!(await status_repository.findOne({ id: id_status }))) {
            return new Error("Status does not exists!");
        }

        if(!(await type_repository.findOne({ id: id_type }))) {
            return new Error("Type does not exists!");
        }

        if(!(await sub_service_repository.findOne({ id: id_sub_service }))) {
            return new Error("Sub Service does not exists!");
        }

        if(!(await user_repository.findOne({ id: id_user }))) {
            return new Error("User does not exists!");
        }
        
        if(depends_on) {
            if(!(await task_repository.findOne({ id: depends_on }))) {
                return new Error("Depends On does not exists!");
            }
        }
        
        const task = task_repository.create({
            description, id_status, id_type, id_sub_service, id_user, depends_on, start_time: new Date(), 
        })

        await task_repository.save(task);
        return task;
    }   
}