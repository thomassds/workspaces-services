import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTasks1647382726893 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tasks",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "id_user",
                        type: "uuid",
                    },
                    {
                        name: "id_type",
                        type: "uuid"
                    },
                    {
                        name: "id_status",
                        type: "uuid"
                    },
                    {
                        name: "id_sub_service",
                        type: "uuid"
                    },
                    { 
                        name: "start_time",
                        type: "timestamp",
                        default: "now()"
                    },
                    { 
                        name: "finish_time",
                        type: "timestamp",
                        isNullable: true
                    },
                    {
                        name: "progress",
                        type: "float",
                        default: 0
                    },
                    {
                        name: "depends_on",
                        type: "uuid",
                        isNullable: true,
                    },
                    { 
                        name: "created_At",
                        type: "timestamp",
                        default: "now()"
                    },
                    { 
                        name: "updated_At",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_task_user",
                        columnNames: ["id_user"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_task_type",
                        columnNames: ["id_type"],
                        referencedTableName: "types",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_task_status",
                        columnNames: ["id_status"],
                        referencedTableName: "status",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_task_sub_services",
                        columnNames: ["id_sub_service"],
                        referencedTableName: "sub_services",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tasks');
    }
}
