import { getCustomRepository, getRepository } from "typeorm";
import UserRepostitory from "../../repositories/UserRepository";

type UserRequest = {
    id: string,
    email: string,
    name: string,
    password_hash: string,
    id_status?: string
};

export class UpdateUserService {
    async execute({ id, email, name, password_hash, id_status }: UserRequest) {
        const userRepository = getCustomRepository(UserRepostitory);

        const user = await userRepository.findOne(id);

        if(!user) {
            return new Error("User does not exists!");
        }

        user.email = email ? email : user.email;
        user.name = name ? name : user.name;
        user.password_hash = password_hash ? password_hash : user.password_hash;
        user.id_status = id_status ? id_status : user.id_status;
        user.updated_At = new Date();

        await userRepository.save(user);
        
        return user;
    }
}