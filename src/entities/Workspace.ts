import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { RealState } from "./RealState";
import { Service } from "./Service";
import { Status } from "./Status";
import { Type } from "./Type";
import { User } from "./User";

@Entity("workspaces")
export class Workspace {

    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @Column()
    id_user: string;

    @ManyToOne(() => User)
    @JoinColumn({name: "id_user"})
    user: User;


    @Column()
    id_real_state: string;

    @ManyToOne(() => RealState)
    @JoinColumn({name: "id_real_state"})
    real_state: RealState;


    @Column()
    id_type: string;

    @ManyToOne(() => Type)
    @JoinColumn({name: "id_type"})
    type: Type;


    @Column()
    id_status: string;

    @ManyToOne(() => Status)
    @JoinColumn({name: "id_status"})
    status: Status;


    @Column()
    id_service: string;

    @ManyToOne(() => Service)
    @JoinColumn({name: "id_service"})
    service: Service;

    @CreateDateColumn()
    start_time: Date;

    @CreateDateColumn()
    finish_time: Date;

    @CreateDateColumn()
    created_At: Date;

    @CreateDateColumn()
    updated_At: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}