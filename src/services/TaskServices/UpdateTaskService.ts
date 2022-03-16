import { getCustomRepository, getRepository } from "typeorm";

import TaskRepository from "../../repositories/TaskRepository";

type TaskRequest = {
    id: string,
    description?: string,
    id_status?: string,
    id_type?: string,
    id_sub_service?: string,
    id_user?: string,
    depends_on?: string
}

export class UpdateTaskService {
    async execute({ id, description }: TaskRequest) {
        const task_repository = getCustomRepository(TaskRepository);
        
        const task = await task_repository.findOne(id);
        if(!task) {
            return new Error("Task does not exists!");
        }

        task.description = description ? description : task.description;
        task.updated_At = new Date();
        
        return task;
    }   
}