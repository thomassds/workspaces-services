import { getCustomRepository, getRepository } from "typeorm";
import UserRepostitory from "../../repositories/UserRepository";

export class GetOneUserService {
    async execute(id: string) {
        const userRepository = getCustomRepository(UserRepostitory);

        const user = await userRepository.find({
            where: { 
                id 
            },
            relations: ["status"]
        });

        if(!user) {
            return new Error("User is not found");
        }
        
        return user;
    }
}