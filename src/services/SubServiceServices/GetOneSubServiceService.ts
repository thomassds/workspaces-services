import { getCustomRepository, getRepository } from "typeorm";
import SubServiceRepository from "../../repositories/SubServiceRepository";

export class GetOneSubServiceService {
    async execute(id: string) {
        const sub_service_repository = getCustomRepository(SubServiceRepository);

        const sub_service = await sub_service_repository.findOne(id);

        return sub_service;
    }
}