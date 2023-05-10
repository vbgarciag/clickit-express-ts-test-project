import { MigrationInterface, QueryRunner } from "typeorm"

export class CreatePostTable1683740375336 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table posts(
            id  uuid primary key default uuid_generate_v4(),
            title varchar(255) not null,
            description varchar(255) not null,
            user_id uuid references users(id) on delete cascade
        );
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        drop table posts;`);
    }

}
