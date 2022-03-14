import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createService1647292564341 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "services",
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
        await queryRunner.dropTable("services");
    }

}
