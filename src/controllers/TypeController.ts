import { Request, Response } from "express";
import { CreateTypeService } from "../services/TypeServices/CreateTypeService";
import { DeleteTypeService } from "../services/TypeServices/DeleteTypeService";
import { GetAllTypeService } from "../services/TypeServices/GetAllTypeService";
import { GetOneTypeService } from "../services/TypeServices/GetOneTypeService";
import { UpdateTypeService } from "../services/TypeServices/UpdateTypeService";

type TypeRequest = {
    id?: string,
    description: string
}

export class TypeController {
    async store(req: Request, res: Response) {
        const { description } = req.body;

        const service = new CreateTypeService();

        const type = await service.execute({ description });

        if(type instanceof Error) {
            return res.status(400).json(type.message);
        }

        return res.json(type);
    }

    async index(req: Request, res: Response) {
        const service = new GetAllTypeService();

        const types = await service.execute();

        return res.json(types);
    }

    async indexId(req: Request, res: Response) {
        const { id } = req.params;

        const service = new GetOneTypeService();

        const type = await service.execute(id);

        return res.json(type);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const service = new DeleteTypeService();

        const type = await service.execute(id);
        if(type instanceof Error) {
            return res.status(400).json(type.message);
        }

        return res.status(204).end();
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { description } = req.body;

        const service = new UpdateTypeService();

        const type = await service.execute({ id, description });

        if(type instanceof Error) {
            return res.status(400).json(type.message);
        }

        return res.json(type);
    }
}