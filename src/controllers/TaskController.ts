import { Request, Response } from "express";
import { CreateTaskService } from "../services/TaskServices/CreateTaskService";
import { DeleteTaskService } from "../services/TaskServices/DeleteTaskService";
import { GetAllTaskService } from "../services/TaskServices/GetAllTaskService";
import { GetOneTaskService } from "../services/TaskServices/GetOneTaskService";
import { UpdateTaskService } from "../services/TaskServices/UpdateTaskService";

export class TaskController {
    async store(req: Request, res: Response) {
        const { description, id_status, id_type, id_sub_service, id_user, depends_on } = req.body;

        const service = new CreateTaskService();

        const task = await service.execute({ description, id_status, id_type, id_sub_service, id_user, depends_on });

        if(task instanceof Error) {
            return res.status(400).json(task.message);
        }
        return res.json(task);
    }

    async index(req: Request, res: Response) {
        const service = new GetAllTaskService();

        const tasks = await service.execute();

        return res.json(tasks);
    }

    async indexId(req: Request, res: Response) {
        const { id } = req.params;

        const service = new GetOneTaskService();

        const task = await service.execute(id);

        if(task instanceof Error) {
            return res.status(400).json(task);
        }

        return res.json(task);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { description } = req.body;

        const service = new UpdateTaskService();

        const task = await service.execute({ id, description });

        return res.json(task);
    }

    async delete(req: Request, res: Response) {
        const { id }= req.params;
        
        const service = new DeleteTaskService();

        const task = await service.execute(id);

        return res.status(204).end();
    }
}