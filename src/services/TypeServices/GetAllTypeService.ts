import { getCustomRepository } from "typeorm";
import TypeRepository from "../../repositories/TypeRepository";

export class GetAllTypeService {
    async execute() {
        const typeRepository = getCustomRepository(TypeRepository);

        const type = await typeRepository.find();
                
        return type;
    }   
}