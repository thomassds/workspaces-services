import { EntityRepository, Repository } from "typeorm";
import { RealState } from "../entities/RealState";

type RealStateRequest = {
    id?: string,
    name: string, 
    id_gr: string,
    id_status: string
}

@EntityRepository(RealState)
export default class RealStateRepository extends Repository<RealState> {
    async createUser({ name, id_gr, id_status }: RealStateRequest) : Promise<RealState>{
        return this.create({
            name, id_gr, id_status
        })
    }

    async saveRealState(real_state: RealState) : Promise<RealState>{
        return this.save(real_state);
    }
}