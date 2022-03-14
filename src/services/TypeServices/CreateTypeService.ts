import { getCustomRepository } from "typeorm";
import TypeRepository from "../../repositories/TypeRepository";

type Type = {
    description: string,
}

export class CreateTypeService {
    async execute({ description } : Type) {
        const typeRepository = getCustomRepository(TypeRepository);

        if(await typeRepository.findOne({ description })) {
            return new Error("Type already exists");
        }

        const type = await typeRepository.createType({ 
            description
        })

        await typeRepository.save(type);
                
        return type;
    }   
}