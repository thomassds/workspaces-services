import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("status")
export class Status {

    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @Column()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}