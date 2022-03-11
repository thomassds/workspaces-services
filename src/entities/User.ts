import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("status")
export class Status {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    password_hash: string;

    @Column()
    id_status: string;

    @ManyToOne(() => Status)
    @JoinColumn({name: "id_status"})
    status: Status;

    @Column()
    created_ad: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}