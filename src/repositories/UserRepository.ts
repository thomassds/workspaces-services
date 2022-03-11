import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

type UserRequest = {
    id?: string,
    name: string, 
    email: string, 
    password_hash: string,
    id_status: string
}

@EntityRepository(User)
export default class UserRepostitory extends Repository<User> {
    async createUser({ name, email, password_hash, id_status }: UserRequest) : Promise<User>{
        return this.create({
            name, email, password_hash, id_status
        })
    }

    async saveUser(user: User) : Promise<User>{
        return this.save(user);
    }
}