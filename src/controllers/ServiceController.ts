import { Request, Response } from "express";
import { CreateServiceService } from "../services/ServiceServices/CreateServiceService";
import { DeleteServiceService } from "../services/ServiceServices/DeleteServiceService";
import { GetAllServiceService } from "../services/ServiceServices/GetAllServiceService";
import { GetOneServiceService } from "../services/ServiceServices/GetOneServiceService";
import { UpdateServiceService } from "../services/ServiceServices/UpdateServiceService";

type ServiceRequest = {
    id?: string,
    description: string
}

export class ServiceController {
    async store(req: Request, res: Response) {
        const { description } = req.body;

        const service = new CreateServiceService();

        const result = await service.execute({description});

        if(result instanceof Error) {
            return res.status(400).json(result.message)
        }

        return res.json(result);
    }

    async index(req: Request, res: Response) {
        const service = new GetAllServiceService();

        const result = await service.execute();

        return res.json(result);
    }

    async indexId(req: Request, res: Response) {
        const { id } = req.params;

        const service = new GetOneServiceService();

        const result = await service.execute(id);
        if(result instanceof Error) {
            return res.status(400).json(result.message);
        }

        return res.json(result);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const service = new DeleteServiceService();

        const result = await service.execute(id);
        if(result instanceof Error) {
            return res.status(400).json(result.message);
        }
        
        return res.status(204).end();
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { description } = req.body;

        const service = new UpdateServiceService();

        const result = await service.execute({ id, description });
        if(result instanceof Error) {
            return res.status(400).json(result.message);
        }

        return res.json(result);
    }
}