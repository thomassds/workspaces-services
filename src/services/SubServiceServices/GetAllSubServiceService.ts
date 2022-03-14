import { getCustomRepository, getRepository } from "typeorm";
import SubServiceRepository from "../../repositories/SubServiceRepository";

export class GetAllSubServiceService {
    async execute() {
        const sub_service_repository = getCustomRepository(SubServiceRepository);

        const sub_service = await sub_service_repository.find();

        return sub_service;
    }
}