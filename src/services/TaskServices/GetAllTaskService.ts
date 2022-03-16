import { getCustomRepository, getRepository } from "typeorm";

import TaskRepository from "../../repositories/TaskRepository";

export class GetAllTaskService {
    async execute() {
        const task_repository = getCustomRepository(TaskRepository);
        
        const tasks = await task_repository.find();

        return tasks;
    }   
}