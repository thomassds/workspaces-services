import { EntityRepository, Repository } from "typeorm";
import { Service } from "../entities/Service";

type ServiceRequest = {
    id?: string,
    description?: string
}

@EntityRepository(Service)
export default class ServiceRepository extends Repository<Service> {
    async findByIdService(id: string) : Promise<Service>{
        return this.findOne(id);
    }

    async createService({ description }: ServiceRequest) : Promise<Service>{
        return this.create({
            description
        })
    }

    async saveService(service: Service) : Promise<Service>{
        return this.save(service);
    }
}