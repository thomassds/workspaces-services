import { getCustomRepository, getRepository } from "typeorm";

import TaskRepository from "../../repositories/TaskRepository";

export class DeleteTaskService {
    async execute(id: string) {
        const task_repository = getCustomRepository(TaskRepository);
        
        const task = await task_repository.findOne(id);
        if(!task) {
            return new Error("Task does not exists!");
        }

        await task_repository.delete(task);
        
        return task;
    }   
}