import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTypes1647288620088 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "types",
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
                        name: "created_At",
                        type: "timestamp",
                        default: "now()"
                    },
                    { 
                        name: "updated_At",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("types");
    }

}
