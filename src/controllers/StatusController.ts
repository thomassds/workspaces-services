import { Request, response, Response } from "express";

import { CreateStatusService } from "../services/StatusServices/CreateStatusService";
import { DeleteStatusService } from "../services/StatusServices/DeleteStatusServices";
import { GetAllStatusService } from "../services/StatusServices/GetAllStatusService";
import { UpdateStatusService } from "../services/StatusServices/UpdateStatusService";
import { GetOneStatusService } from "../services/StatusServices/GetOneStatusService";

export class StatusController {
    async store(req: Request, res: Response) {
        const { description } = req.body

        const service = new CreateStatusService();

        const status = await service.execute({ description });

        if(status instanceof Error) {
            return res.status(400).json(status.message);
        }

        return res.json(status);
    }

    async index(req: Request, res: Response) {
        const service = new GetAllStatusService();

        const status = await service.execute();

        return res.json(status);
    }

    async indexId(req: Request, res: Response) {
        const { id } = req.params;

        const service = await new GetOneStatusService();

        const status = await service.execute(id);

        return res.json(status);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const service = new DeleteStatusService();

        const status = await service.execute(id);

        if(status instanceof Error) {
            return res.status(400).json(status.message);
        }

        return res.status(204).end();
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { description } = req.body;

        const service = new UpdateStatusService();

        const status = await service.execute({ id, description });

        if(status instanceof Error) {
            return res.status(400).send(status.message);
        }

        return res.json(status);
    }
}