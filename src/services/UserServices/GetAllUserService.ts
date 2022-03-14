import { getCustomRepository, getRepository } from "typeorm";
import UserRepostitory from "../../repositories/UserRepository";

export class GetAllUserService {
    async execute() {
        const userRepository = getCustomRepository(UserRepostitory);

        const users = await userRepository.find({
            relations: ["status"],
            select: ["id", "name", "email", "status"]
        });
        
        return users;
    }
}