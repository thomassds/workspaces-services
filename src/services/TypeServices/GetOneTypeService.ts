import { getCustomRepository } from "typeorm";
import TypeRepository from "../../repositories/TypeRepository";

export class GetOneTypeService {
    async execute(id: string) {
        const typeRepository = getCustomRepository(TypeRepository);

        const type = await typeRepository.findOne({ id });
                
        return type;
    }   
}