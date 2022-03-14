import { getCustomRepository } from "typeorm";
import TypeRepository from "../../repositories/TypeRepository";

type TypeRequest = {
    id: string,
    description: string
}

export class UpdateTypeService {
    async execute({ id, description }: TypeRequest) {
        const typeRepository = getCustomRepository(TypeRepository);

        if(!description || description == "") {
            return new Error("Description cannot be null");
        }

        const type = await typeRepository.findOne({ id });
        if(!type) {
            return new Error("Type does not exists!");
        }
        
        type.description = description ? description : type.description;
        
        await typeRepository.saveType(type);

        return type;
    }   
}