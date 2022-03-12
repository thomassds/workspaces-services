import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

import { Status } from "./Status";
import { Crypto } from "../configs/crypto";

@Entity("real_states")
export class RealState {

    @PrimaryColumn()
    id: string;

    @Column({
        type: "varchar",
        nullable: false,
        transformer: Crypto
      })
    name: string;

    @Column({
        type: "varchar",
        nullable: false,
        transformer: Crypto
      })
    id_gr: string

    @Column()
    id_status: string;

    @ManyToOne(() => Status)
    @JoinColumn({name: "id_status"})
    status: Status;

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