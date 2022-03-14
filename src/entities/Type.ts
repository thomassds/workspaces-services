import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("types")
export class Type {

    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

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