import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateUsersTable1683739080834 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table users(
            id  uuid primary key default uuid_generate_v4(),
            name varchar(255) not null,
            age int not null ,
            email varchar(255) not null,
            telephone varchar(255) not null,
            createdAt  timestamp default current_timestamp,
            updatedAt timestamp default null
        );
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        drop table users;`);
    }

}
