import { getCustomRepository, getRepository } from "typeorm";

import UserRepostitory from "../../repositories/UserRepository";
import StatusRepostitory from "../../repositories/StatusRepository";

type UserRequest = {
    email: string,
    name: string,
    password_hash: string,
    id_status: string
}

export class CreateUserService {
    async execute({ name, email, password_hash, id_status } : UserRequest) {
        const userRepository = getCustomRepository(UserRepostitory);
        const statusRepository = getCustomRepository(StatusRepostitory);

        if(!await statusRepository.findByIdStatus(id_status)) {
            return new Error("Status does not exists!");
        }   

        const user = userRepository.create({ 
            name,
            email,
            password_hash,
            id_status
        })

        await userRepository.save(user);
        
        user.password_hash = undefined;
        
        return user;
    }   
}