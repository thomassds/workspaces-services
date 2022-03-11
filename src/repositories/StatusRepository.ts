import { EntityRepository, Repository } from "typeorm";
import { Status } from "../entities/Status";

type StatusRequest = {
    id?: "string",
    description?: "string"
}

@EntityRepository(Status)
export default class StatusRepostitory extends Repository<Status> {
    async findByIdStatus(id: string) : Promise<Status>{
        return this.findOne(id);
    }

    async createStatus({ description }: StatusRequest) : Promise<Status>{
        return this.create({
            description
        })
    }

    async saveUser(status: Status) : Promise<Status>{
        return this.save(status);
    }

    async deleteUser(status: Status) : Promise<Status>{
        return this.remove(status);
    }
}