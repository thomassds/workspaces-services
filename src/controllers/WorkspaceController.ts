import { Request, Response } from "express";
import { CreateWorkspaceService } from "../services/WorkspacesServices/CreateWorkspaceService";

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

export class UserController {
    async store(req: Request, res: Response) {
        const { description, id_user, id_status, id_type, id_service, id_real_state } = req.body;

        const service = new CreateWorkspaceService();

        const workspace = await service.execute({ description, id_user, id_status, id_type, id_service, id_real_state });

        if(workspace instanceof Error) {
            return res.status(400).json(workspace.message);
        }

        return res.json(workspace);
    }
}