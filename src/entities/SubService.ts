import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Service } from "./Service";


@Entity("sub_services")
export class SubService {

    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @Column()
    id_service: string;

    @ManyToOne(() => Service)
    @JoinColumn({name: "id_service"})
    service: Service;

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