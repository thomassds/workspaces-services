import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1646953381036 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    { 
                        name: "name",
                        type: "varchar",
                        isUnique: false
                    },
                    {
                        name: "password_hash",
                        type: "varchar",
                    },
                    {
                        name: "id_status",
                        type: "uuid"
                    },
                    { 
                        name: "created_at",
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
        await queryRunner.dropTable("users");
    }

}
