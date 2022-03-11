import { getCustomRepository } from "typeorm";
import UserRepostitory from "../../repositories/UserRepository";

export class DeleteUserService {
    async execute(id: string) {
        const userRepository = getCustomRepository(UserRepostitory);

        const user = await userRepository.findOne(id)
        if(!user) {
            return new Error("User does not exists!");
        }

        await userRepository.delete(id);
    }
}