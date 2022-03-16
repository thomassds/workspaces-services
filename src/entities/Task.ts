import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Status } from "./Status";
import { SubService } from "./SubService";
import { Type } from "./Type";
import { User } from "./User";

@Entity("tasks")
export class Task {

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
    id_sub_service: string;

    @ManyToOne(() => SubService)
    @JoinColumn({name: "id_sub_service"})
    sub_service: SubService;


    @CreateDateColumn()
    start_time: Date;

    @CreateDateColumn()
    finish_time: Date;

    @Column()
    progress: number;

    @Column()
    depends_on: string;

    @OneToOne(() => Task)
    dependence: Task

    
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