import { Request, Response } from "express";
import { UpdateSubServiceService } from "../services/SubServiceServices/UpdateSubServiceService";
import { CreateSubServiceService } from "../services/SubServiceServices/CreateSubServiceService";
import { GetAllSubServiceService } from "../services/SubServiceServices/GetAllSubServiceService";
import { GetOneSubServiceService } from "../services/SubServiceServices/GetOneSubServiceService";
import { DeleteSubServiceService } from "../services/SubServiceServices/DeleteSubServiceService";

type SubServiceRequest = {
    id?: string,
    id_service: string,
    description: string
}

export class SubServiceController {
    async store(req: Request, res: Response) {
        const { id_service, description } = req.body;

        const service = new CreateSubServiceService();

        const sub_service = await service.execute({ id_service, description });
        if(sub_service instanceof Error) {
            return res.status(400).json(sub_service.message);
        }

        return res.json(sub_service);
    }

    async index(req: Request, res: Response) {
        const service = new GetAllSubServiceService();

        const sub_services = await service.execute();

        return res.json(sub_services);
    }

    async indexId(req: Request, res: Response) {
        const { id } = req.params;

        const service = new GetOneSubServiceService();

        const sub_service = await service.execute(id);

        return res.json(sub_service);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        
        const service = new DeleteSubServiceService();

        const sub_service = await service.execute(id);
        if(sub_service instanceof Error) {
            return res.status(400).send(sub_service.message);
        }
        
        return res.status(204).end();
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { description, id_service } = req.body;

        const service = new UpdateSubServiceService();

        const sub_service = await service.execute({ id, id_service, description });
        if(sub_service instanceof Error) {
            return res.status(400).json(sub_service.message);
        }

        return res.json(sub_service);
    }
}