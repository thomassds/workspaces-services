import { Request, Response } from "express";
import { CreateWorkspaceService } from "../services/WorkspacesServices/CreateWorkspaceService";
import { DeleteWorkspaceService } from "../services/WorkspacesServices/DeleteWorkspaceService";
import { GetOneWorkspaceService } from "../services/WorkspacesServices/GetOneWorkspaceService";
import { GetPendingWorkspaceService } from "../services/WorkspacesServices/GetPendingWorkspaceService";
import { UpdateWorkspaceService } from "../services/WorkspacesServices/UpdateWorkspaceService";

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

export class WorkspaceController {
    async store(req: Request, res: Response) {
        const { description, id_user, id_status, id_type, id_service, id_real_state } = req.body;

        const service = new CreateWorkspaceService();

        const workspace = await service.execute({ description, id_user, id_status, id_type, id_service, id_real_state });

        if(workspace instanceof Error) {
            return res.status(400).json(workspace.message);
        }

        return res.json(workspace);
    }

    async indexId(req: Request, res: Response) {
        const { id } = req.params;

        const service = new GetOneWorkspaceService();
        
        const workspace = await service.execute(id);

        return res.json(workspace);
    }

    async indexPending(req: Request, res: Response) {
        const service = new GetPendingWorkspaceService();

        const workspace = await service.execute();

        if(workspace instanceof Error) {
            return res.status(400).json(workspace.message);
        }
        return res.json(workspace);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const service = new DeleteWorkspaceService();

        const workspace = await service.execute(id);

        if(workspace instanceof Error) {
            return res.status(400).json(workspace.message);
        }

        return res.json(workspace);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { description, id_user, id_real_state, id_type, id_status, id_service, start_time, finish_time } = req.body;

        const service = new UpdateWorkspaceService();

        const workspace = await service.execute({
            id, description, id_user, id_real_state, id_type, id_status, id_service, start_time, finish_time
        });

        if(workspace instanceof Error) {
            return res.json(workspace.message);
        }

        return res.json(workspace);
    }
}