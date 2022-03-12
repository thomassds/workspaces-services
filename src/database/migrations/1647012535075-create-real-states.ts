import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createRealStates1647012535075 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "real_states",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "id_gr",
                        type: "varchar",
                    },
                    {
                        name: "id_status",
                        type: "uuid"
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
                        name: "fk_user_status",
                        columnNames: ["id_status"],
                        referencedTableName: "status",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("real_states");
    }

}
