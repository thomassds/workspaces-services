import { getCustomRepository } from "typeorm";
import TypeRepository from "../../repositories/TypeRepository";

export class DeleteTypeService {
    async execute(id: string) {
        const typeRepository = getCustomRepository(TypeRepository);

        const type = await typeRepository.find({ id });
        if(!type) {
            return new Error("Type does not exists!");
        }

        await typeRepository.delete(id);                
    }   
}