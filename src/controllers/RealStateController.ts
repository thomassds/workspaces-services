import { Request, Response } from "express";

import { CreateRealStateServie } from "../services/RealStateServices/CreateRealStateService";
import { DeleteRealStateService } from "../services/RealStateServices/DeleteRealStateService";
import { GetAllRealStateService } from "../services/RealStateServices/GetAllRealStateService";
import { GetOneRealStateService } from "../services/RealStateServices/GetOneRealStateService";
import { UpdateRealStateService } from "../services/RealStateServices/UpdateRealStateService";

type RealStateRequest = {
    id?: string,
    name: string,
    id_gr: string,
    id_status: string
}

export class RealStateController {
    async store(req: Request, res: Response) {
        const { name, id_gr, id_status } = req.body;

        const service = new CreateRealStateServie();

        const real_state = await service.execute({ name, id_gr, id_status });

        if(real_state instanceof Error) {
            return res.status(400).json(real_state.message);
        }

        return res.json(real_state);
    }

    async index(req: Request, res: Response) {
        const service = new GetAllRealStateService();

        const real_state = await service.execute();

        return res.json(real_state);
    }

    async indexId(req: Request, res: Response) {
        const { id } = req.params;

        const service = new GetOneRealStateService();

        const real_state = await service.execute(id);

        if(real_state instanceof Error) {
            return res.status(400).json(real_state.message);
        }

        return res.json(real_state);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const service = new DeleteRealStateService();

        const real_state = service.execute(id);
        if(real_state instanceof Error) {
            return res.status(400).json(real_state.message);
        }

        return res.status(204).end();
    }

    async update(req: Request, res: Response)  {
        const { id } = req.params;
        const { name, id_gr, id_status } = req.body;

        const service = new UpdateRealStateService();

        const real_state = await service.execute({ id, name, id_gr, id_status });

        if(real_state instanceof Error) {
            return res.status(400).json(real_state.message);
        }

        return res.json(real_state);
    }
}