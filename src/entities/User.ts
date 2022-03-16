import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

import { EncryptionTransformer } from "typeorm-encrypted";

import { Status } from "./Status";
import { Crypto } from "../configs/crypto";

@Entity("users")
export class User {

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
    email: string

    @Column({
        type: "varchar",
        nullable: false,
        transformer: Crypto,
        select: false
      })
    password_hash: string;

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