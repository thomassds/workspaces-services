import { EntityRepository, Repository } from "typeorm";
import { Type } from "../entities/Type";

type TypeRequest = {
    id?: string,
    description: string
}

@EntityRepository(Type)
export default class TypeRepository extends Repository<Type> {
    async createType({ description }: TypeRequest) : Promise<Type>{
        return this.create({
            description
        })
    }

    async saveType(type: Type) : Promise<Type>{
        return this.save(type);
    }
}