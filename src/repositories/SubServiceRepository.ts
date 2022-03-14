import { EntityRepository, Repository } from "typeorm";
import { SubService } from "../entities/SubService";

type SubServiceRequest = {
    id?: string,
    id_service?: string,
    description: string
}

@EntityRepository(SubService)
export default class SubServiceRepository extends Repository<SubService> {
    async createType({ description, id_service }: SubServiceRequest) : Promise<SubService>{
        return this.create({
            id_service,
            description
        })
    }

    async saveType(subService: SubServiceRequest) : Promise<SubService>{
        return this.save(subService);
    }
}