import { EntityRepository, Repository } from "typeorm";
import { Task } from "../entities/Task";

type TaskRequest = {
    id?: string,
    description: string,
    id_status: string,
    id_type: string,
    id_sub_service: string,
    id_user: string,
    start_time?: Date,
    finish_time?: Date,
    progress?: number,
    depends_on?: string
}

@EntityRepository(Task)
export default class TaskRepository extends Repository<Task> {

    async saveTask(task: TaskRequest) : Promise<Task>{
        return this.save(task);
    }
}