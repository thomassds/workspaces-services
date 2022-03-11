import { Request, Response } from "express";

import { CreateUserService } from "../services/UsuarioService/CreateUserService";
import { DeleteUserService } from "../services/UsuarioService/DeleteUserService";
import { GetAllUserService } from "../services/UsuarioService/GetAllUserService";
import { GetOneUserService } from "../services/UsuarioService/GetOneUserService";
import { UpdateUserService } from "../services/UsuarioService/UpdateUserService";

type UserRequest = {
    id?: string,
    name: string,
    email: string,
    password_hash: string,
    id_status: string
}

export class UserController {
    async store(req: Request, res: Response) {
        const { name, email, password_hash, id_status }:UserRequest = req.body;

        if(!name || name == "") {
            return res.status(400).json("Name is not defined");
        }

        if(!email || email == "") {
            return res.status(400).json("Email is not defined");
        }

        if(!password_hash || password_hash == "") {
            return res.status(400).json("Password is not defined");
        }

        const service = new CreateUserService();

        const user = await service.execute({name, email, password_hash, id_status});

        if(user instanceof Error) {
            return res.status(400).json(user.message);
        }

        return res.json(user);
    }

    async index(req: Request, res: Response) {
        const service = new GetAllUserService();

        const users = await service.execute();

        return res.json(users);
    }

    async indexId(req: Request, res: Response) {
        const { id } = req.params;

        const service = new GetOneUserService();

        const user = await service.execute(id);

        if(user instanceof Error) {
            return res.status(400).json(user.message);
        }

        return res.json(user);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const service = new DeleteUserService();

        const user = await service.execute(id);

        if(user instanceof Error) {
            return res.status(400).json(user.message);
        }

        return res.status(204).end();
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { email, name, password_hash, id_status } = req.body;

        const service = new UpdateUserService();

        const user = await service.execute({ id, email, name, password_hash, id_status });

        if(user instanceof Error) {
            return res.status(400).json(user.message);
        }

        return res.json(user);
    }
}