import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createWorkspaces1647302315426 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "workspaces",
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
                        name: "id_real_state",
                        type: "uuid"
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
                        name: "id_service",
                        type: "uuid"
                    },
                    { 
                        name: "start_time",
                        type: "timestamp",
                    },
                    { 
                        name: "finish_time",
                        type: "timestamp",
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
                        name: "fk_workspace_user",
                        columnNames: ["id_user"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_workspace_real_state",
                        columnNames: ["id_real_state"],
                        referencedTableName: "real_states",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_workspace_type",
                        columnNames: ["id_type"],
                        referencedTableName: "types",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_workspace_status",
                        columnNames: ["id_status"],
                        referencedTableName: "status",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_workspace_services",
                        columnNames: ["id_service"],
                        referencedTableName: "services",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('workspaces');
    }

}
