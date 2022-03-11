import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("status")
export class Status {

    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @CreateDateColumn({ name: "created_At" })
    created_At: Date;

    @UpdateDateColumn({ name: "updated_At" })
    updated_At: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}