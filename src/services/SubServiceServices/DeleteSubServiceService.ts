import { getCustomRepository, getRepository } from "typeorm";
import SubServiceRepository from "../../repositories/SubServiceRepository";

export class DeleteSubServiceService {
    async execute(id: string) {
        const sub_service_repository = getCustomRepository(SubServiceRepository);

        const sub_service = await sub_service_repository.findOne(id);
        if(!sub_service) {
            return new Error("Sub Service does not exists!");
        }

        await sub_service_repository.delete(id);

        return sub_service;
    }
}